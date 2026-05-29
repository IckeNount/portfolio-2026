import gsap from "gsap";
export const staggerIn = (targets, stagger = 0.1) =>
  gsap.from(targets, { opacity: 0, y: 40, duration: 0.7, stagger, ease: "power3.out" });
