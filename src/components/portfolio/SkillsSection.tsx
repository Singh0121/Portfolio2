import { Skill } from "@/types/portfolio";

const skills: Skill[] = [
  { name: "C Programming", category: "Languages", icon: "💻", caption: "Code likhta hoon, compiler clap karta hai" },
  { name: "Python", category: "Languages", icon: "🐍", caption: "Snake game se shuru, AI tak pohcha" },
  { name: "Java", category: "Languages", icon: "☕", caption: "Coffee peeke code likhta hoon" },
  { name: "SQL", category: "Database", icon: "🗄️", caption: "Data ka database, queries ka badshah" },
  { name: "Embedded Systems", category: "Hardware", icon: "🔌", caption: "Hardware aur software ka pyaar" },
  { name: "DSA", category: "Core", icon: "📊", caption: "Algorithm ki duniya ka hero" },
  { name: "Machine Learning", category: "AI", icon: "🤖", caption: "AI se dosti, ML se yaari" },
  { name: "Problem Solving", category: "Soft Skills", icon: "🧩", caption: "Bug fix karna mera passion hai" },
  { name: "OOPS", category: "Core", icon: "🧱", caption: "Objects, classes aur full-on reusability ka tadka" },
  { name: "Digital Electronics", category: "Hardware", icon: "⚡", caption: "0 aur 1 se banayi filmi kahaani" },
  { name: "MS Excel", category: "Tools", icon: "📈", caption: "Sheets mein data, formulas ka dhamaka" },
  { name: "Team Collaboration", category: "Soft Skills", icon: "🤝", caption: "Squad ke saath kaam, delivery super fast" }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Skill Wali WebSeries 🌟
        </h2>
        <p className="text-muted-foreground mb-12 text-lg italic">
          "Debugger mera therapist hai"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.3)] animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
            >
              <div className="text-5xl mb-3 group-hover:animate-float">{skill.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{skill.category}</p>
              <p className="text-sm text-accent italic opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
