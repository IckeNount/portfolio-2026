import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const useGSAP = (callback, deps = []) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => callback(gsap), ref);
    return () => ctx.revert();
  }, deps);
  return ref;
};
export default useGSAP;
