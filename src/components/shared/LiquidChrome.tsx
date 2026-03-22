import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import type { HTMLAttributes } from "react";
import "./LiquidChrome.css";

type LiquidChromeProps = HTMLAttributes<HTMLDivElement> & {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
};

export default function LiquidChrome({
  baseColor = [0.72, 0.72, 0.72],
  speed = 0.2,
  amplitude = 0.24,
  frequencyX = 2.35,
  frequencyY = 2,
  interactive = false,
  className,
  ...props
}: LiquidChromeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [baseColorR, baseColorG, baseColorB] = baseColor;

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const renderer = new Renderer({
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1),
      powerPreference: "low-power",
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

        for (float i = 1.0; i < 8.0; i++) {
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
        }

        vec2 diff = uvCoord - uMouse;
        float dist = length(diff);
        float falloff = exp(-dist * 16.0);
        float ripple = sin(8.0 * dist - uTime * 1.7) * 0.02;
        uv += (diff / (dist + 0.0001)) * ripple * falloff;

        float field = abs(sin(uTime * 0.8 - uv.y - uv.x));
        float veins = 1.0 - smoothstep(0.0, 0.16, field);
        float smoke = 1.0 - smoothstep(0.1, 0.96, field);
        float brightness = clamp(pow(smoke, 2.4) * 0.38 + pow(veins, 1.08), 0.0, 1.0);

        vec3 darkTone = vec3(0.04, 0.04, 0.045);
        vec3 midTone = uBaseColor;
        vec3 color = mix(darkTone, midTone, smoothstep(0.0, 0.78, brightness));
        color = mix(color, vec3(1.0), smoothstep(0.62, 1.0, brightness));
        return vec4(color, 1.0);
      }

      void main() {
        vec4 col = vec4(0.0);
        int samples = 0;

        for (int i = -1; i <= 1; i++) {
          for (int j = -1; j <= 1; j++) {
            vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
            col += renderImage(vUv + offset);
            samples++;
          }
        }

        gl_FragColor = col / float(samples);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / Math.max(gl.canvas.height, 1),
          ]),
        },
        uBaseColor: {
          value: new Float32Array([baseColorR, baseColorG, baseColorB]),
        },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    let animationId = 0;
    let isInView = true;
    let isDocumentVisible = document.visibilityState === "visible";
    let isRunning = false;
    let observer: IntersectionObserver | null = null;

    const resize = () => {
      const width = Math.max(container.offsetWidth, 1);
      const height = Math.max(container.offsetHeight, 1);
      renderer.setSize(width, height);
      const resUniform = program.uniforms.uResolution.value as Float32Array;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / Math.max(gl.canvas.height, 1);
    };

    const handlePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = (clientX - rect.left) / rect.width;
      mouseUniform[1] = 1 - (clientY - rect.top) / rect.height;
    };

    const handleMouseMove = (event: MouseEvent) => {
      handlePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        handlePointer(touch.clientX, touch.clientY);
      }
    };

    const update = (time: number) => {
      if (!isRunning) {
        return;
      }

      animationId = window.requestAnimationFrame(update);
      program.uniforms.uTime.value = time * 0.001 * speed;
      renderer.render({ scene: mesh });
    };

    const start = () => {
      if (isRunning || !isInView || !isDocumentVisible) {
        return;
      }

      isRunning = true;
      animationId = window.requestAnimationFrame(update);
    };

    const stop = () => {
      isRunning = false;
      if (animationId !== 0) {
        window.cancelAnimationFrame(animationId);
        animationId = 0;
      }
    };

    const syncPlayback = () => {
      if (isInView && isDocumentVisible) {
        start();
      } else {
        stop();
      }
    };

    const handleVisibilityChange = () => {
      isDocumentVisible = document.visibilityState === "visible";
      syncPlayback();
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.05 },
    );

    observer.observe(container);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    resize();

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    container.appendChild(gl.canvas);
    syncPlayback();

    return () => {
      stop();
      observer?.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      gl.canvas.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    amplitude,
    baseColorB,
    baseColorG,
    baseColorR,
    frequencyX,
    frequencyY,
    interactive,
    speed,
  ]);

  const classes = ["liquid-chrome-container", className].filter(Boolean).join(" ");

  return <div ref={containerRef} className={classes} {...props} />;
}
