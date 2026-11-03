export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  status: string;
  description: string;
  roles: {
    title: string;
    period: string;
    description: string;
  }[];
}

export const educationData: EducationItem = {
  degree: "Bachelor of Technology in Computer Engineering",
  institution: "AISSMS Institute of Information Technology",
  location: "Pune, Maharashtra, India",
  graduationDate: "Sep 2022 – June 2026",
  status: "Graduated · CGPA 7.26 / 10",
  description: "Coursework spanning data structures and algorithms, object-oriented programming, database management systems, computer networks and artificial intelligence.",
  roles: [
    {
      title: "Training and Placement Secretary",
      period: "Third Year (TE)",
      description: "Coordinated corporate campus placement drives, student communication, and liaison between technical recruiters and the student body."
    },
    {
      title: "Sports Head",
      period: "Second Year (SE)",
      description: "Led department sports organization, organized inter-departmental tournaments, and managed athletic events."
    },
    {
      title: "CESA Department Committee Member",
      period: "Academic Years",
      description: "Active contributor to Computer Engineering Student Association (CESA) technical initiatives, workshops, and departmental symposiums."
    },
    {
      title: "College Cricket Team Player",
      period: "3 Years Active",
      description: "Represented the college cricket team across inter-collegiate tournaments, cultivating leadership, resilience, and disciplined team collaboration."
    }
  ]
};

