export interface ProfileData {
  name: string;
  initials: string;
  headline: string;
  subHeadline: string;
  statement: string;
  status: {
    available: boolean;
    text: string;
  };
  location: string;
  educationShort: string;
  photo: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  /** Path to the resume PDF inside /public. Replace the file to update. */
  resumeUrl: string;
}

export const profileData: ProfileData = {
  name: "Atharv Deshmukh",
  initials: "AD",
  headline: "Engineering ideas into meaningful digital experiences.",
  subHeadline: "Software Engineer • Full-Stack Developer • AI/ML Enthusiast",
  statement: "I build digital experiences and intelligent solutions through engineering, technology and creative problem-solving.",
  status: {
    available: true,
    text: "Open to Software Engineer & Full-Stack roles"
  },
  location: "Pune, India",
  educationShort: "B.Tech in Computer Engineering • June 2026",
  photo: "/profile.jpeg",
  socials: {
    github: "https://github.com/Atharv-Dev04",
    linkedin: "https://www.linkedin.com/in/atharv-deshmukh-7403a9292/",
    email: "atharvdeshmukh.04@gmail.com"
  },
  resumeUrl: "/Atharv_Deshmukh_CV.pdf"
};
