import { Project } from "@/types/portfolio";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay?: number;
}

const ProjectCard = ({ project, onClick, delay = 0 }: ProjectCardProps) => {
  return (
    <Card
      className="group relative overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(229,9,20,0.3)] animate-fade-in"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
      onClick={onClick}
    >
      {project.backgroundVideo ? (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
            src={project.backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </>
      ) : project.backgroundImage ? (
        <>
          {/\.[a-zA-Z]+$/.test(project.backgroundImage) ? (
            <img
              src={project.backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
            />
          ) : (
            <picture>
              <source srcSet={`${project.backgroundImage}.webp`} type="image/webp" />
              <source srcSet={`${project.backgroundImage}.png`} type="image/png" />
              <source srcSet={`${project.backgroundImage}.jpeg`} type="image/jpeg" />
              <img
                src={`${project.backgroundImage}.jpg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
              />
            </picture>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
      )}
      
      <div className="relative p-6 h-full flex flex-col">
        <div className="text-6xl mb-4">{project.icon}</div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        {/* Description hidden on cards; shown in modal on click */}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 3).map((tool, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-secondary rounded text-foreground"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-xs px-2 py-1 bg-secondary rounded text-foreground">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

        <div className="text-sm text-accent italic opacity-0 group-hover:opacity-100 transition-opacity">
          {project.dialogues[0]}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
