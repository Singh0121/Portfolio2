import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Search } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  type: 'project' | 'skill' | 'certification' | 'internship';
  description: string;
  icon: string;
}

const SearchModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock data - in a real app, this would come from props or context
  const allItems: SearchResult[] = [
    // Projects
    { id: "1", title: "Smart Attendance System", type: "project", description: "AI-powered attendance tracking using facial recognition", icon: "" },
    { id: "2", title: "Brain Tumor Detection Using ML", type: "project", description: "Medical imaging analysis for early tumor detection", icon: "" },
    { id: "3", title: "Obstacle Detection Gloves", type: "project", description: "Wearable sensor gloves for obstacle detection", icon: "" },
    
    // Skills
    { id: "4", title: "Python", type: "skill", description: "Snake game se shuru, AI tak pohcha", icon: "🐍" },
    { id: "5", title: "Java", type: "skill", description: "Coffee peeke code likhta hoon", icon: "☕" },
    { id: "6", title: "Machine Learning", type: "skill", description: "AI se dosti, ML se yaari", icon: "🤖" },
    { id: "7", title: "OOPS", type: "skill", description: "Objects, classes aur full-on reusability ka tadka", icon: "🧱" },
    { id: "8", title: "Digital Electronics", type: "skill", description: "0 aur 1 se banayi filmi kahaani", icon: "⚡" },
    { id: "9", title: "MS Excel", type: "skill", description: "Sheets mein data, formulas ka dhamaka", icon: "📈" },
    { id: "10", title: "Team Collaboration", type: "skill", description: "Squad ke saath kaam, delivery super fast", icon: "🤝" },
    
    // Certifications
    { id: "11", title: "Python for Data Science", type: "certification", description: "NPTEL (Mar 2025)", icon: "🐍" },
    { id: "12", title: "Java", type: "certification", description: "HackerRank (Feb 2025)", icon: "☕" },
    { id: "13", title: "Computer Architecture", type: "certification", description: "NPTEL (Jul 2023)", icon: "🏗️" },
    { id: "14", title: "OrCAD PSpice", type: "certification", description: "Livewire (Apr 2023)", icon: "⚡" },
    
    // Internship
    { id: "15", title: "Chennai Petroleum Corporation Ltd", type: "internship", description: "Instrumentation Intern - Industrial automation and safety systems", icon: "" }
  ];

  useEffect(() => {
    if (query.trim()) {
      const filtered = allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project': return 'text-blue-500';
      case 'skill': return 'text-green-500';
      case 'certification': return 'text-purple-500';
      case 'internship': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'project': return 'Project';
      case 'skill': return 'Skill';
      case 'certification': return 'Certification';
      case 'internship': return 'Internship';
      default: return 'Item';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-card border-accent">
        <DialogHeader>
          <DialogTitle className="text-2xl text-accent flex items-center gap-2">
            <Search className="w-6 h-6" />
            Search Portfolio
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects, skills, certifications, internships..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>

          <div className="max-h-96 overflow-y-auto">
            {query && results.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No results found for "{query}"</p>
              </div>
            )}

            {query && results.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground mb-3">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
                {results.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                    onClick={() => {
                      // Scroll to section based on type
                      const sectionMap = {
                        project: 'projects',
                        skill: 'skills',
                        certification: 'certifications',
                        internship: 'internships'
                      };
                      const sectionId = sectionMap[item.type];
                      if (sectionId) {
                        const element = document.getElementById(sectionId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                      onClose();
                    }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full bg-accent/20 ${getTypeColor(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!query && (
              <div className="text-center py-8 text-muted-foreground">
                <p>Start typing to search your portfolio...</p>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors"
          aria-label="Close search"
        >
          <X className="w-4 h-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;


