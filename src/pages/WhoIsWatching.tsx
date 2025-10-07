import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const WhoIsWatching = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowProfile(true), 300);
  }, []);

  const handleProfileClick = () => {
    // Play Netflix ta-dum sound (simulated with audio API)
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    
    setTimeout(() => navigate("/home"), 600);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-16 animate-fade-in">
        Who's Watching?
      </h1>
      
      <div 
        className={`transition-all duration-500 ${showProfile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <button
          onClick={handleProfileClick}
          className="group flex flex-col items-center gap-4 cursor-pointer hover:scale-110 transition-all duration-300"
          aria-label="Select Babu Rao profile"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-transparent group-hover:border-accent transition-all duration-300 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <span className="text-7xl">👓</span>
            </div>
            <div className="absolute inset-0 bg-gradient-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              Babu Rao Ganpat Rao Apte
            </h2>
            <p className="text-sm text-muted-foreground italic mt-1">
              (Guest)
            </p>
            <p className="text-sm text-accent mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              "Main dekh raha hoon re baba!"
            </p>
          </div>
        </button>
      </div>

      <div className="absolute bottom-8 text-center text-muted-foreground text-sm">
        <p>Click to enter the VPS Cinematic Universe</p>
      </div>
    </div>
  );
};

export default WhoIsWatching;
