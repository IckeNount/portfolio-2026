import { useState, useEffect } from "react";
import "./AnimatedText.css";

/**
 * AnimatedText Component
 * Displays text with character-by-character animation effect
 *
 * @param {string} text - The text to animate
 * @param {number} delay - Delay between each character animation in ms (default: 50)
 * @param {string} className - Additional CSS classes to apply
 * @param {boolean} repeat - Whether to repeat the animation (default: false)
 */
export default function AnimatedText({
  text = "",
  delay = 50,
  className = "",
  repeat = false,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!text || !isAnimating) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        if (!repeat) {
          setIsAnimating(false);
        } else {
          currentIndex = 0;
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, isAnimating, repeat]);

  return (
    <div className={`animated-text ${className}`}>
      {displayedText}
      {isAnimating && <span className='cursor'>|</span>}
    </div>
  );
}
