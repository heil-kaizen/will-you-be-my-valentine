import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

interface Bubble {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  scale: number;
  type: 'heart' | 'circle';
  color: string;
}

const generateBubbles = (count: number): Bubble[] => {
  return Array.from({ length: count }).map((_, i) => {
    // Randomize colors between different valentine shades
    const colors = [
      'text-valentine-200',
      'text-valentine-300',
      'text-valentine-400',
      'text-valentine-200/50',
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return {
      id: i,
      left: `${Math.random() * 100}%`,
      // Duration between 10s and 25s for slow rising
      animationDuration: `${Math.random() * 15 + 10}s`,
      // Negative delay to ensure screen is full on load
      animationDelay: `-${Math.random() * 20}s`,
      scale: Math.random() * 1.5 + 0.5,
      type: Math.random() > 0.6 ? 'heart' : 'circle',
      color,
    };
  });
};

export const Background: React.FC = () => {
  // Use useMemo to prevent regeneration on re-renders
  const bubbles = useMemo(() => generateBubbles(50), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute top-[100%] ${bubble.color} animate-rise`}
          style={{
            left: bubble.left,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
            transform: `scale(${bubble.scale})`,
          }}
        >
          {bubble.type === 'heart' ? (
            <Heart fill="currentColor" size={24} />
          ) : (
            <div 
              className="rounded-full bg-current" 
              style={{ 
                width: '16px', 
                height: '16px',
                opacity: 0.6 
              }} 
            />
          )}
        </div>
      ))}
    </div>
  );
};