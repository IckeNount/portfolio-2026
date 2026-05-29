// src/components/sections/Hero.jsx
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import AnimatedText from "../ui/AnimatedText";
import Button from "../ui/Button";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("/models/scene.splinecode");
    return () => app.dispose(); // cleanup on unmount
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <canvas ref={canvasRef} className='absolute inset-0 w-full h-full z-0' />
      <div className='relative z-10 text-center px-6'>
        <AnimatedText
          text='Full Stack Developer'
          className='text-accent text-sm tracking-widest uppercase mb-4 block'
        />
        <h1 className='font-display text-6xl md:text-8xl text-white leading-none mb-6'>
          Building
          <br />
          Digital Worlds
        </h1>
        <p className='text-white/50 text-lg max-w-md mx-auto mb-10'>
          I craft fast, interactive, and memorable web experiences.
        </p>
        <div className='flex gap-4 justify-center'>
          <Button variant='primary'>View Work</Button>
          <Button variant='outline'>Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
