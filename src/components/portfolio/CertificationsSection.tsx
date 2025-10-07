import { Certification } from "@/types/portfolio";

const certifications: Certification[] = [
  { title: "Python for Data Science", tag: "NPTEL (Mar 2025)", icon: "🐍", link: "https://drive.google.com/file/d/16OvdJuZgHLbeaf_PKTxRjDc5nwoxbiOf/view" },
  { title: "Java", tag: "HackerRank (Feb 2025)", icon: "☕", link: "https://drive.google.com/file/d/1K1-4G915It0-YMMRXMaVVkm0YuGU1YRu/view" },
  { title: "Computer Architecture", tag: "NPTEL (Jul 2023)", icon: "🏗️", link: "https://drive.google.com/file/d/1JbekbmeqkNF_FBjiuNN8XQ2GOyj1zbSt/view" },
  { title: "OrCAD PSpice", tag: "Livewire (Apr 2023)", icon: "⚡", link: "https://drive.google.com/file/d/1JoK2CuqZgoVhIsahqM_7BiW6xO869-96/view" }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Bonus Scenes 🏆
        </h2>
        <p className="text-muted-foreground mb-12 text-lg italic">
          "Certificates bhi blockbuster collection hai!"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative bg-card border border-border rounded-lg p-6 overflow-hidden hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,9,20,0.3)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="text-5xl mb-4 group-hover:animate-float">{cert.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <div className="inline-block px-3 py-1 bg-accent/20 rounded-full">
                  <p className="text-sm font-semibold text-accent">{cert.tag}</p>
                </div>
                {cert.link && (
                  <div className="mt-4">
                    <h4 className="text-sm font-bold text-foreground mb-1">Saboot Chahiye? Yeh raha saboot</h4>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 border border-accent/40"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-lg border border-accent/30">
          <p className="text-lg text-foreground italic">
            "Har certificate ek nayi kahani, har skill ek naya adventure!" 🎬
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
