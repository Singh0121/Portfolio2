import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Smart Attendance System",
    description:
      "Classroom mein entry bhi hero ki tarah honi chahiye, aur attendance bhi smart banega!" +
      "\n\n" +
      "This project is your AI hero that doesn’t just take attendance—it recognizes faces, fights proxies, and saves teachers from boring roll calls. With CNN-powered face recognition, it marks who’s present in a flash, keeps data safe, and makes attendance faster than a Bollywood chase scene!" +
      "\n\n" +
      "\"Agar attendance miss hua, toh main nahi maanoonga!\" – Don’t worry, our system never misses a face.",
    tools: ["Face Recognition", "Python", "OpenCV", "CNNs", "DeepFace", "SQLite"],
    results: "Accurate, secure, proxy-proof attendance with automated processing",
    dialogues: [
      "Usey pakadna mushkil hi nahi... namumkin tha — ab tak!",
      "Mere paas Face Recognition hai.",
      "Classroom efficiency: ON. Proxy attendance: GAME OVER."
    ],
    icon: "👨‍💻",
    gradient: "from-blue-500/20 to-purple-500/20",
    backgroundImage: "/smart-attendance-bg.jpg",
    backgroundVideo: "/smart-attendance-intro.mp4",
    hideCardDescription: true
  },
  {
    id: "2",
    title: "Brain Tumor Detection Using ML",
    description:
      "Doctor ke jaise dimaag tez, par AI ka style alag!" +
      "\n\n" +
      "This project is the medical superstar that spots brain tumors from MRI scans faster than you can say 'cut!'. Using machine learning magic, it classifies tumors with precision, supporting doctors and saving lives—no drama, only action!" +
      "\n\n" +
      "\"Tumor bhai, tumhare din ginti ke hai!\" – The system detects you before anyone else does!",
    tools: ["MATLAB", "ImageJ", "WEKA", "Machine Learning"],
    results: "90%+ accuracy in tumor classification and detection",
    dialogues: [
      "AI bhi bola – All izz well! 🎓",
      "Yeh scanner nahi, life-saver hai!",
      "Picture abhi baaki hai mere dost – diagnosis ka!"
    ],
    icon: "🧠",
    gradient: "from-green-500/20 to-teal-500/20",
    hideCardDescription: true,
    backgroundVideo: "/brain-tumor-intro.mp4"
  },
  {
    id: "3",
    title: "Obstacle Detection Gloves",
    description:
      "Raaste mein jo bhi obstacle aayega… dhai kilo ka haath, woh pakad lega!" +
      "\n\n" +
      "These gloves are the ultimate superhero gadget for visually impaired users! Ultrasonic and infrared sensors sense every obstacle in real-time and alert the wearer with vibrations—like having Chulbul Pandey on your hand guiding every step." +
      "\n\n" +
      "\"Mogambo khush hua!\"\n→ Every obstacle detected = user safe, happy, and unstoppable. From low-hanging branches to unexpected objects, these gloves don’t miss a thing!",
    tools: ["Arduino Nano", "C Programming", "Sensors", "Embedded Systems"],
    results: "Real-time obstacle detection with haptic feedback",
    dialogues: [
      "Manjulika bhi in gloves se nahi bachti! 👻",
      "Andhe ko bhi rasta dikhane wali technology!",
      "Yeh gloves nahi, superhero ka equipment hai!"
    ],
    icon: "🧤",
    gradient: "from-red-500/20 to-orange-500/20",
    backgroundVideo: "/obstacle-gloves-intro.mp4"
  }
];

const ProjectsSection = ({ onProjectClick }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Tech Blockbusters 🎬
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          "Yeh projects nahi, ek scientific thriller hai"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
