export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  results: string;
  dialogues: string[];
  icon: string;
  gradient: string;
  hideCardDescription?: boolean;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
  caption: string;
}

export interface Certification {
  title: string;
  tag: string;
  icon: string;
  link?: string;
}
