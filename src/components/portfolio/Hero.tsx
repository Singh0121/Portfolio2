const Hero = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] overflow-hidden rounded-2xl md:rounded-3xl border border-border shadow-[0_10px_40px_rgba(0,0,0,0.5)] mx-2 md:mx-6 mt-4 bg-black">
      {/* Background poster right side */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-2xl">

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight animate-fade-in">
            Venkatesh Pratap Singh
        </h1>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <span className="px-2 py-1 rounded bg-secondary/60 border border-border">Electronics & Communication</span>
            <span className="px-2 py-1 rounded bg-secondary/60 border border-border">AI/ML</span>
            <span className="px-2 py-1 rounded bg-secondary/60 border border-border">Embedded Systems</span>
            <span className="px-2 py-1 rounded bg-secondary/60 border border-border">Python • Java • SQL</span>
        </div>

          <p className="mt-6 text-base md:text-lg text-muted-foreground/90 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            I am an Electronics and Communication Engineering student with proven skills in Python, Java, SQL, and Embedded Systems. In my universe, projects play the lead role: a face‑recognition attendance system and a brain‑tumor detection model delivering high accuracy. Add a cameo of hands‑on internship work in industrial instrumentation and workflow automation—and you get a blockbuster mix of tech, discipline, and drama. "Code likhta hoon, results dikhata hoon." 🎬
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <a
              href="https://drive.google.com/file/d/1zebkG3H4UImJDqHq740G0GzGnRAn5W6O/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-5 py-3 font-semibold shadow hover:opacity-90 transition"
            >
              <span>Start watching</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
