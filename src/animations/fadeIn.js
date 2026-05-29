import gsap from "gsap";
export const fadeIn = (target, delay = 0) =>
  gsap.from(target, { opacity: 0, y: 30, duration: 0.8, delay, ease: "power3.out" });
