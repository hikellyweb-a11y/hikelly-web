const canRun =
  window.matchMedia("(hover: hover)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canRun) {
  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.className = "sparkle-layer";
  document.body.appendChild(layer);

  const colors = ["#c4708f", "#e79ab9", "#f3c3d4", "#b05b7b", "#e8b98f"];

  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;

  const spawn = (x: number, y: number) => {
    if (layer.childElementCount > 90) return;

    const el = document.createElement("span");
    el.className =
      Math.random() > 0.35 ? "sparkle sparkle-star" : "sparkle sparkle-dot";

    const star = el.classList.contains("sparkle-star");
    const size = star ? 5 + Math.random() * 9 : 2 + Math.random() * 3.5;

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.setProperty(
      "--sparkle-color",
      colors[Math.floor(Math.random() * colors.length)] ?? colors[0],
    );
    el.style.setProperty(
      "--sparkle-drift-x",
      `${(Math.random() - 0.5) * 48}px`,
    );
    el.style.setProperty(
      "--sparkle-drift-y",
      `${(Math.random() - 0.5) * 40 - 10}px`,
    );
    el.style.setProperty(
      "--sparkle-rotate",
      `${(Math.random() * 90 - 45).toFixed(1)}deg`,
    );
    el.style.animationDuration = `${560 + Math.random() * 640}ms`;

    layer.appendChild(el);
    el.addEventListener("animationend", () => el.remove(), { once: true });
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      const now = performance.now();
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;

      if (now - lastTime < 34 || dx * dx + dy * dy < 100) return;

      lastTime = now;
      lastX = event.clientX;
      lastY = event.clientY;

      spawn(
        event.clientX + (Math.random() - 0.5) * 10,
        event.clientY + (Math.random() - 0.5) * 10,
      );
    },
    { passive: true },
  );
}
