const scriptCache = new Map<string, Promise<void>>();

export const loadScript = (src: string) => {
  const existing = document.querySelector(
    `script[src="${src}"]`,
  ) as HTMLScriptElement | null;

  if (existing?.dataset.loaded === "true") {
    return Promise.resolve();
  }

  const cached = scriptCache.get(src);
  if (cached) {
    return cached;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const script =
      existing ??
      Object.assign(document.createElement("script"), {
        src,
        async: true,
      });

    const cleanup = () => {
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
    };

    const onLoad = () => {
      script.dataset.loaded = "true";
      cleanup();
      resolve();
    };

    const onError = () => {
      cleanup();
      reject(new Error(`Failed to load script: ${src}`));
    };

    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    if (!existing) {
      document.body.appendChild(script);
    }

    if (existing && script.dataset.loaded === "true") {
      cleanup();
      resolve();
    }
  });

  scriptCache.set(src, promise);
  return promise;
};
