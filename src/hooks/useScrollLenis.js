import { useEffect } from "react";
import Lenis from "lenis";
const useScrollLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.07, smooth: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
};
export default useScrollLenis;
