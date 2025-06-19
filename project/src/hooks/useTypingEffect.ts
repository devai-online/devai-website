import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export const useTypingEffect = ({ texts, speed = 100, delay = 2000 }: UseTypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText === currentFullText) {
          setIsPaused(true);
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }
      }
    }, isPaused ? delay : isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, delay]);

  return currentText;
};