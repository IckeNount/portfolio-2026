import gsap from "gsap";
export const textReveal = (target) =>
  gsap.from(target, { y: "100%", opacity: 0, duration: 1, ease: "expo.out" });
