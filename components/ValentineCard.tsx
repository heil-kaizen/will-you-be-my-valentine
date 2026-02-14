import React from 'react';
import { Heart, Stars } from 'lucide-react';
import { NO_PHRASES } from '../constants';

interface ValentineCardProps {
  noCount: number;
  onNoClick: () => void;
  onYesClick: () => void;
}

export const ValentineCard: React.FC<ValentineCardProps> = ({
  noCount,
  onNoClick,
  onYesClick,
}) => {
  // Calculate Yes button scale based on noCount
  // We cap the font size multiplier to avoid browser crashing or UI breaking completely, 
  // but let it get comically large.
  const yesButtonSize = noCount * 20 + 16;
  
  const getNoButtonText = () => {
    return NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];
  };

  // Select a placeholder image that feels somewhat consistent
  // Using a specific seed to keep it cute
  const heroImage = "https://picsum.photos/seed/valentine/400/300";

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md animate-float">
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-4 border-white flex flex-col items-center text-center w-full">
        
        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 text-valentine-500 animate-bounce-slow">
          <Heart fill="currentColor" size={48} />
        </div>
        <div className="absolute -bottom-4 -left-4 text-valentine-400 animate-pulse">
          <Stars size={32} />
        </div>

        {/* Image */}
        <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-valentine-200 shadow-inner">
           {/* In a real app, I'd use a cute bear gif here. For this demo, using picsum with a warm filter style via CSS or just the image */}
          <img 
            src={heroImage} 
            alt="Cute valentine" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Question */}
        <h1 className="font-heading text-4xl md:text-5xl text-valentine-600 mb-2 leading-tight">
          Will you be my Valentine?
        </h1>
        <p className="text-valentine-800/70 text-lg mb-8 font-medium">
          Pretty please? 🥺
        </p>

        {/* Buttons Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full relative min-h-[60px]">
          
          <button
            onClick={onYesClick}
            style={{ fontSize: yesButtonSize }}
            className={`
              bg-valentine-500 hover:bg-valentine-600 text-white font-bold rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 ease-out
              flex items-center justify-center gap-2 z-20
              ${noCount === 0 ? 'px-8 py-3 text-xl' : 'px-6 py-4'}
            `}
          >
            Yes
            <Heart 
              className={noCount > 0 ? "hidden" : "inline"} 
              size={20} 
              fill="currentColor" 
            />
          </button>

          <button
            onClick={onNoClick}
            className="group px-6 py-3 bg-white text-valentine-600 font-semibold rounded-full border-2 border-valentine-200 hover:bg-valentine-50 hover:border-valentine-400 transition-all duration-200 hover:scale-95 active:scale-90 z-10 whitespace-nowrap"
          >
            {getNoButtonText()}
          </button>

        </div>
      </div>
    </div>
  );
};