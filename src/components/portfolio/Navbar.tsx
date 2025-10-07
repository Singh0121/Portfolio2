import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a href="#top" className="select-none text-2xl font-black tracking-wider text-red-600" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          NETFLIX
        </a>
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
      </div>
    </header>
  );
};

export default Navbar;


