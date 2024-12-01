import { useCallback } from 'react';

export const useConfetti = () => {
  return useCallback(() => {
    const colors = ['#ff718d', '#fdff6a', '#7afcff', '#ff7eb9'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'absolute w-2 h-2 rounded-full';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }
  }, []);
};