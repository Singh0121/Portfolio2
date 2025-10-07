import { useState } from "react";
import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import InternshipSection from "@/components/portfolio/InternshipSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { Project } from "@/types/portfolio";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectsSection onProjectClick={setSelectedProject} />
      <InternshipSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Portfolio;
