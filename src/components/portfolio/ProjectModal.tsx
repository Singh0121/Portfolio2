import { Project } from "@/types/portfolio";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-accent">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-3xl">
            <span className="text-5xl">{project.icon}</span>
            <span className="text-accent">{project.title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {/* Tools Used */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/20 rounded-lg text-accent font-semibold border border-accent/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Results & Impact</h3>
            <p className="text-muted-foreground">{project.results}</p>
          </div>

          {/* Bollywood Dialogues */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Bollywood Style Commentary 🎬</h3>
            <div className="space-y-3">
              {project.dialogues.map((dialogue, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border-l-4 border-accent animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <p className="text-foreground italic">{dialogue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Fun Quote */}
          <div className="mt-6 p-6 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-lg border border-accent/30">
            <p className="text-lg text-center text-foreground italic font-semibold">
              "Yeh project nahi, ek scientific thriller hai!" 🎭
            </p>
          </div>

          {/* Project Report - only for Smart Attendance System */}
          {project.title === "Smart Attendance System" && (
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1Igi01zyeNpxJhI57cQLTGMUnFahLpB98/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="block select-none text-3xl md:text-4xl tracking-wider text-red-600 hover:text-red-500 transition-colors"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                PROJECT REPORT
              </a>
              <p className="mt-1 text-sm text-muted-foreground italic">(project report ke liye yaha dabaye)</p>
            </div>
          )}

          {project.title === "Brain Tumor Detection Using ML" && (
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1IMGzEtrexCP2tpIqwPw69yJhSR6zdTgB/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="block select-none text-3xl md:text-4xl tracking-wider text-red-600 hover:text-red-500 transition-colors"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                PROJECT REPORT
              </a>
              <p className="mt-1 text-sm text-muted-foreground italic">(project report ke liye yaha dabaye)</p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
