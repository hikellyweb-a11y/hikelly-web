import { getLenis, prefersReducedMotion } from "./smooth";
import Snap from "lenis/snap";

const root = document.querySelector<HTMLElement>("[data-sw]");

if (root) {
  const clips = Array.from(root.querySelectorAll<HTMLElement>("[data-clip]"));
  const stops = Array.from(root.querySelectorAll<HTMLElement>("[data-stop]"));
  const dots = Array.from(root.querySelectorAll<HTMLElement>("[data-rail-dot]"));
  const videos = clips.map((clip) =>
    clip.querySelector<HTMLVideoElement>(".sw-video"),
  );
  const images = clips.map((clip) => clip.querySelector<HTMLElement>(".sw-img"));
  const counter = root.querySelector<HTMLElement>("[data-rail-counter]");
  const cue = root.querySelector<HTMLElement>("[data-sw-cue]");
  const veil = root.querySelector<HTMLElement>(".sw-veil");
  const stage = root.querySelector<HTMLElement>(".sw-stage");
  const count = clips.length;
  const totalLabel = String(count).padStart(2, "0");

  const reduced = prefersReducedMotion();

  const durations = new Array<number>(count).fill(0);
  const loaded = new Set<number>();
  const loading = new Set<number>();
  let currentIndex = -1;
  if (veil) veil.style.opacity = "0.16";

  // Lenis solo se crea si NO hay "reducir movimiento" (devuelve null en ese caso).
  const lenis = getLenis();

  const load = (index: number) => {
    const clip = clips[index];
    const video = videos[index];
    if (!clip || !video || loaded.has(index) || loading.has(index)) return;
    const src = video.dataset.src;
    if (!src) return;
    loading.add(index);

    // Carga directa por URL (streaming + metadata) para activar antes.
    video.preload = "metadata";
    video.loop = true;
    video.src = src;
    video.load();

    const ready =
      video.readyState >= 1
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            video.addEventListener("loadedmetadata", () => resolve(), {
              once: true,
            });
            video.addEventListener("error", () => resolve(), { once: true });
          });

    ready
      .then(async () => {
        durations[index] = Number.isFinite(video.duration)
          ? video.duration
          : 0;
        await video
          .play()
          .then(() => video.pause())
          .catch(() => undefined);
        loaded.add(index);
        clip.classList.add("is-ready");
        if (index === currentIndex) {
          video.play().catch(() => undefined);
        }
        const img = images[index];
        if (img) img.style.transform = "";
      })
      .catch(() => {
        clip.classList.add("is-ready");
      })
      .finally(() => {
        loading.delete(index);
      });
  };

  const activate = (index: number) => {
    if (index === currentIndex) return;
    currentIndex = index;
    clips.forEach((clip, i) =>
      clip.classList.toggle("opacity-100", i === index),
    );
    clips.forEach((clip, i) => clip.classList.toggle("opacity-0", i !== index));
    images.forEach((img, i) => {
      if (!img) return;
      if (i === index) {
        img.style.transform = "scale(1.02)";
      } else {
        img.style.transform = "scale(1)";
      }
    });
    stops.forEach((stop, i) => {
      stop.classList.toggle("opacity-100", i === index);
      stop.classList.toggle("translate-y-0", i === index);
      stop.classList.toggle("pointer-events-auto", i === index);
      stop.classList.toggle("opacity-0", i !== index);
      stop.classList.toggle("translate-y-6", i !== index);
      stop.classList.toggle("pointer-events-none", i !== index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-accent", i === index);
      dot.classList.toggle("scale-150", i === index);
      dot.classList.toggle("bg-ink-inverse/30", i !== index);
      dot.classList.toggle("scale-100", i !== index);
    });
    if (counter) {
      counter.textContent = `${String(index + 1).padStart(2, "0")} / ${totalLabel}`;
    }
    if (veil) {
      veil.style.opacity = clips[index]?.dataset.veil === "soft" ? "0.16" : "0.40";
    }
    videos.forEach((video, i) => {
      if (!video) return;
      if (i === index && loaded.has(i)) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  };

  const frame = () => {
    // Altura del escenario (sticky) en vez de window.innerHeight:
    // en iOS el innerHeight cambia al colapsar la barra de URL.
    const stageHeight = stage?.offsetHeight || window.innerHeight;
    const total = root.offsetHeight - stageHeight;
    const scrolled = Math.min(Math.max(-root.getBoundingClientRect().top, 0), total);
    const progress = total > 0 ? scrolled / total : 0;
    const position = progress * count;
    const index = Math.min(count - 1, Math.max(0, Math.floor(position)));
    const local = Math.min(1, Math.max(0, position - index));

    activate(index);

    if (cue) {
      cue.style.opacity = progress > 0.04 ? "0" : "1";
      cue.style.pointerEvents = progress > 0.04 ? "none" : "auto";
    }

    if (!reduced) {
      const img = images[index];
      if (img && durations[index] <= 0) {
        const scale = 1 + local * 0.02;
        img.style.transform = `scale(${scale.toFixed(4)})`;
      } else if (img) {
        img.style.transform = "scale(1.02)";
      }
    }

    load(index);
    if (index + 1 < count) load(index + 1);
    if (index + 2 < count) load(index + 2);
    if (index - 1 >= 0) load(index - 1);
  };

  const loop = () => {
    frame();
    requestAnimationFrame(loop);
  };

  load(0);
  requestAnimationFrame(loop);

  if (lenis) {
    const stageHeight = stage?.offsetHeight || window.innerHeight;
    const span = (root.offsetHeight - stageHeight) / count;
    const snap = new Snap(lenis, {
      type: "proximity",
      distanceThreshold: "60%",
      duration: 0.4,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    for (let i = 0; i < count; i += 1) snap.add(i * span);
  }
}
