import { useEffect, useRef } from "react";
import { loadScript } from "../lib/loadScript";
import type {
  NavigatorWithConnection,
  VantaEffect,
  VantaFogOptions,
  WindowWithVanta,
} from "../types/site";

const BASE_FOG_OPTIONS: Omit<VantaFogOptions, "el" | "scale" | "scaleMobile"> = {
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  highlightColor: 0x8e8573,
  midtoneColor: 0x5f5150,
  lowlightColor: 0x413c59,
  blurFactor: 0.34,
  speed: 0.58,
  zoom: 0.6,
};

const THREE_SCRIPT_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_SCRIPT_URL =
  "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js";

const shouldEnableFog = () => {
  const browserNavigator = navigator as NavigatorWithConnection;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isCompactScreen = window.matchMedia("(max-width: 900px)").matches;
  const connection = browserNavigator.connection;
  const isConstrainedNetwork =
    connection?.saveData === true ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "3g";
  const lowPowerDevice =
    (navigator.hardwareConcurrency ?? 8) <= 4 ||
    (browserNavigator.deviceMemory ?? 8) <= 4;

  return (
    !prefersReducedMotion &&
    !isCompactScreen &&
    !isConstrainedNetwork &&
    !lowPowerDevice
  );
};

const getFogOptions = (): Omit<VantaFogOptions, "el"> => {
  const pixelRatio = window.devicePixelRatio || 1;
  const renderScale = pixelRatio >= 2 ? 0.56 : 0.66;

  return {
    ...BASE_FOG_OPTIONS,
    scale: renderScale,
    scaleMobile: renderScale,
  };
};

export const useIntroFog = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const browserWindow = window as WindowWithVanta;
    let cancelled = false;
    let introVisible = false;
    let readyHandler: (() => void) | null = null;
    let timerId: number | null = null;
    let idleId: number | null = null;
    let observer: IntersectionObserver | null = null;
    let activeFog: VantaEffect | null = null;
    let fogInitializing = false;
    const fogEnabled = shouldEnableFog();

    const destroyFog = () => {
      activeFog?.destroy();
      activeFog = null;
    };

    const setupFog = async () => {
      if (
        !heroRef.current ||
        !introVisible ||
        !fogEnabled ||
        activeFog ||
        fogInitializing ||
        document.visibilityState !== "visible"
      ) {
        return;
      }

      fogInitializing = true;

      try {
        if (!browserWindow.THREE) {
          await loadScript(THREE_SCRIPT_URL);
        }

        if (!browserWindow.VANTA?.FOG) {
          await loadScript(VANTA_SCRIPT_URL);
        }

        if (
          cancelled ||
          !introVisible ||
          !heroRef.current ||
          !browserWindow.VANTA?.FOG ||
          activeFog
        ) {
          return;
        }

        activeFog = browserWindow.VANTA.FOG({
          el: heroRef.current,
          ...getFogOptions(),
        });
      } catch (error) {
        console.error("Unable to initialize Vanta fog background.", error);
      } finally {
        fogInitializing = false;
      }
    };

    const syncFog = () => {
      if (!fogEnabled) {
        destroyFog();
        return;
      }

      if (introVisible) {
        void setupFog();
      } else {
        destroyFog();
      }
    };

    const onVisibilityChange = () => {
      syncFog();
    };

    const observeIntro = () => {
      if (!heroRef.current) {
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          introVisible = entry.isIntersecting;
          syncFog();
        },
        { threshold: 0 },
      );

      observer.observe(heroRef.current);
    };

    const startWhenIdle = () => {
      const initObserver = () => {
        observeIntro();
      };

      if (browserWindow.requestIdleCallback) {
        idleId = browserWindow.requestIdleCallback(initObserver, {
          timeout: 600,
        });
        return;
      }

      timerId = window.setTimeout(initObserver, 150);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    if (document.readyState === "loading") {
      readyHandler = () => {
        startWhenIdle();
      };
      document.addEventListener("DOMContentLoaded", readyHandler, {
        once: true,
      });
    } else {
      startWhenIdle();
    }

    return () => {
      cancelled = true;
      if (readyHandler) {
        document.removeEventListener("DOMContentLoaded", readyHandler);
      }
      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
      if (idleId !== null && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleId);
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer?.disconnect();
      destroyFog();
    };
  }, []);

  return heroRef;
};
