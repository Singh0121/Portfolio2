import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for opening search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <a href="#top" className="select-none text-2xl font-black tracking-wider text-red-600" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            NETFLIX
          </a>
          
          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 md:flex">
              <a className="text-sm text-muted-foreground hover:text-foreground" href="#projects">
                Projects
              </a>
              <a className="text-sm text-muted-foreground hover:text-foreground" href="#internships">
                Internships
              </a>
              <a className="text-sm text-muted-foreground hover:text-foreground" href="#skills">
                Skills
              </a>
              <a className="text-sm text-muted-foreground hover:text-foreground" href="#education">
                Education
              </a>
              <a className="text-sm text-muted-foreground hover:text-foreground" href="#certifications">
                Certifications
              </a>
              <a className="text-sm text-muted-foreground hover:text-foreground" href="#end-credits">
                Contact
              </a>
            </nav>
            
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="relative p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border/50 hover:border-accent/50 group"
              aria-label="Search portfolio"
              title="Search portfolio (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Ctrl+K
              </span>
            </button>
          </div>
        </div>
      </header>
      
      <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;


