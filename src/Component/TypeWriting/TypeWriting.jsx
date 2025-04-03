import { useEffect, useState } from "react";

const TypeWriting = () => {
  // Typing effect states
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = ["SOFTWARE DEVELOPER", "FRONT-END DEVELOPER", ".NET DEVELOPER"];
  const delay = 150;
  const pauseDuration = 1000;

  // Typing effect
  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (currentIndex < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + texts[currentTextIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, delay / 2);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentTextIndex]);

  return (
    <>
      <h1 className="md:mt-7 text-pink-500 md:h-[30px] bg-transparent text-[12px] md:text-[16px]">
        {currentText}
        {isTyping && <span className="animate-blink">_</span>}
      </h1>
    </>
  );
};

export default TypeWriting;
