"use client";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[]; // Define texts as an array of strings
  speed?: number; // Optional prop for typing speed
  pauseTime?: number; // Optional prop for pause time between typing texts
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  speed = 100,
  pauseTime = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    let currentText = texts[currentIndex];

    if (!isDeleting) {
      // Typing effect
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => currentText.substring(0, prev.length + 1));

        if (displayedText === currentText) {
          setTimeout(() => {
            setIsDeleting(true); // Pause after typing the full text
          }, pauseTime);
        }
      }, speed);
    } else {
      // Deleting effect
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Move to the next text
        }
      }, speed / 2); // Speed up deletion
    }

    return () => clearTimeout(typingTimeout); // Clear the timeout on unmount
  }, [displayedText, isDeleting, texts, currentIndex, speed, pauseTime]);

  return <h1 className="typing-effect-h1">{displayedText}</h1>;
};

export default TypingEffect;
