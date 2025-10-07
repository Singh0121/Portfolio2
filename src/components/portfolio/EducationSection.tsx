const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Flashback Rewind 🎓
        </h2>
        <p className="text-muted-foreground mb-12 text-lg italic">
          "All Izz Well" – 3 Idiots
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-accent/30"></div>

          {/* Education items */}
          <div className="space-y-12">
            {/* Class X */}
            <div className="relative flex items-center gap-8 animate-fade-in">
              <div className="hidden md:block w-1/2"></div>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>
              <div className="ml-16 md:ml-0 md:w-1/2 bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group">
                <div className="text-4xl mb-3">📘</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Class X – ICSE | 75.2% – Casterbridge School
                </h3>
                <p className="text-muted-foreground mb-3">(2018–2019)</p>
              </div>
            </div>

            {/* Class XII */}
            <div className="relative flex items-center gap-8 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="hidden md:block w-1/2 md:text-right pr-8">
                <div className="inline-block bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group">
                  <div className="text-4xl mb-3">🎒</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Class XII – ICSE | 74.6% – Casterbridge School
                  </h3>
                  <p className="text-muted-foreground mb-3">(2020–2021)</p>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>
              <div className="ml-16 md:hidden bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group">
                <div className="text-4xl mb-3">🎒</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Class XII – ICSE | 74.6% – Casterbridge School
                </h3>
                <p className="text-muted-foreground mb-3">(2020–2021)</p>
              </div>
            </div>

            {/* B.Tech */}
            <div className="relative flex items-center gap-8 animate-fade-in" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
              <div className="hidden md:block w-1/2"></div>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>
              <div className="ml-16 md:ml-0 md:w-1/2 bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  B.Tech in Electronics and Communication Engineering
                </h3>
                <p className="text-accent font-semibold mb-2">SRM Institute of Science and Technology, Chennai</p>
                <p className="text-muted-foreground mb-3">CGPA: 8.36</p>
                <div className="mt-4 p-3 bg-secondary/50 rounded border-l-4 border-accent">
                  <p className="text-sm italic text-foreground">
                    "Aal Izz Well – bas padhai karo aur marks aane do!"
                  </p>
                </div>
              </div>
            </div>

            {/* Future placeholder */}
            <div className="relative flex items-center gap-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="hidden md:block w-1/2 md:text-right pr-8">
                <div className="inline-block bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 group">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    The Journey Continues...
                  </h3>
                  <p className="text-muted-foreground italic">
                    "Picture abhi baaki hai mere dost!"
                  </p>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent/50 rounded-full transform -translate-x-1/2 ring-4 ring-background animate-glow-pulse"></div>
              <div className="ml-16 md:hidden bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 group">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  The Journey Continues...
                </h3>
                <p className="text-muted-foreground italic">
                  "Picture abhi baaki hai mere dost!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
