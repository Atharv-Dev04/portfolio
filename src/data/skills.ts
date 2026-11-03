export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Core languages for building software, data scripts and database queries.",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"]
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Responsive, structured and user-centric client interfaces.",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Framer Motion"]
  },
  {
    id: "backend",
    name: "Backend",
    description: "REST APIs, service routing and data validation layers.",
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "SQLAlchemy", "Alembic", "Pydantic", "JWT Auth"]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational and document storage.",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"]
  },
  {
    id: "aiml",
    name: "AI/ML & Computer Vision",
    description: "Deep learning, semantic segmentation and image processing.",
    skills: ["PyTorch", "Segmentation Models PyTorch", "OpenCV", "NumPy", "Semantic Segmentation", "UNet", "UNet++", "LinkNet", "DeepLabV3+", "MAnet"]
  },
  {
    id: "tools",
    name: "Tools & Analytics",
    description: "Version control, editors and data-visualisation tools.",
    skills: ["Git", "GitHub", "VS Code", "Excel", "Power BI", "Tableau"]
  }
];
