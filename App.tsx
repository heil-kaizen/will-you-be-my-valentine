import React, { useState } from 'react';
import { Background } from './components/Background';
import { ValentineCard } from './components/ValentineCard';
import { SuccessView } from './components/SuccessView';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  const handleReset = () => {
    setIsAccepted(false);
    setNoCount(0);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-valentine-100 via-valentine-200 to-valentine-300 flex items-center justify-center p-4">
      <Background />
      
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center min-h-[600px]">
        {isAccepted ? (
          <SuccessView onReset={handleReset} />
        ) : (
          <ValentineCard 
            noCount={noCount} 
            onNoClick={handleNoClick} 
            onYesClick={handleYesClick} 
          />
        )}
      </main>

      <footer className="absolute bottom-4 text-valentine-800/60 text-sm font-medium">
        Made with ❤️ for you
      </footer>
    </div>
  );
};

export default App;