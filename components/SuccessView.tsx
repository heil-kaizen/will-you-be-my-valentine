import React, { useEffect, useState } from 'react';
import { Heart, RefreshCw, Sparkles } from 'lucide-react';

interface SuccessViewProps {
  onReset: () => void;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ onReset }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Using a nice romantic placeholder image
  const successImage = "https://picsum.photos/id/1060/500/350"; // Couple or warm vibe

  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700">
      <div className="relative bg-white/90 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl border-4 border-valentine-200 text-center max-w-lg mx-4">
        
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
           <div className="bg-valentine-500 text-white p-4 rounded-full shadow-lg animate-bounce">
             <Heart size={40} fill="currentColor" />
           </div>
        </div>

        <div className="mt-6 mb-8 overflow-hidden rounded-xl border-2 border-valentine-100 shadow-inner">
            <img 
              src={successImage} 
              alt="Celebration" 
              className="w-full h-64 object-cover" 
            />
        </div>

        <h1 className="font-heading text-5xl md:text-6xl text-valentine-600 mb-6 drop-shadow-sm">
          Yay! I knew it!
        </h1>
        
        <p className="text-xl text-valentine-800 font-medium leading-relaxed mb-8">
          Best Valentine's Day ever! <br/>
          <span className="text-sm opacity-75">(I wasn't going to take no for an answer anyway 😉)</span>
        </p>

        <div className="flex justify-center gap-2 text-valentine-400 animate-pulse">
            <Sparkles />
            <Sparkles className="delay-100" />
            <Sparkles className="delay-200" />
        </div>

        {showButton && (
           <button
             onClick={onReset}
             className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-valentine-700/50 hover:text-valentine-700 flex items-center gap-2 text-sm transition-colors"
           >
             <RefreshCw size={14} />
             Play again
           </button>
        )}
      </div>
    </div>
  );
};