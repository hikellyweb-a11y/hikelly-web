import gsap from "gsap";
import { getLenis, prefersReducedMotion } from "./smooth";

getLenis();

const revealables = document.querySelectorAll<HTMLElement>(".reveal");

if (prefersReducedMotion()) {
  revealables.forEach((element) => element.classList.add("is-in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
  );

  revealables.forEach((element) => observer.observe(element));

  const taglines = document.querySelectorAll<HTMLElement>("[data-tagline]");
  taglines.forEach((tagline) => {
    const words = tagline.querySelectorAll<HTMLElement>("[data-word]");
    gsap.set(words, { opacity: 0.28, y: 0 });
    const taglineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(words, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
          });
          taglineObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.35 },
    );
    taglineObserver.observe(tagline);
  });
}
