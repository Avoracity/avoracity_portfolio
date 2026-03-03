import { useEffect } from "react";

export default function useLetterBounce() {
  useEffect(() => {
    const texts = document.querySelectorAll(".modal-action-text");

    texts.forEach((text) => {
      const letters = text.textContent.split("");
      text.innerHTML = "";

      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.className = "inline-block";
        span.style.animation = "bounceLetter 1.5s ease infinite";
        span.style.animationDelay = `${index * 0.15}s`;
        span.innerHTML = letter;
        text.appendChild(span);
      });
    });
  }, []);
}