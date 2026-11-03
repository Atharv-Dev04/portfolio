export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  badge?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "epps-infotech",
    role: "Software Intern",
    company: "EPPS InfoTech",
    location: "Pune, India",
    duration: "6 Months",
    period: "July 2026 – Present",
    badge: "Internship",
    summary: "Backend-focused internship working with Python and FastAPI on RESTful services, database modelling and request/response validation.",
    highlights: [
      "Developed and maintained backend services using FastAPI, building RESTful APIs for core application features.",
      "Designed database models and schemas using SQLAlchemy for data handling and persistence.",
      "Implemented data validation and serialization with Pydantic models for robust API request/response handling.",
      "Debugged and optimized existing codebases, resolving issues to improve application stability."
    ],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Pandas", "SQL", "REST APIs", "Service & Router Architecture"]
  }
];
