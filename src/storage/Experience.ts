interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Ltd",
    duration: "2022 - Present",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    duration: "2020 - 2022",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebCraft Technologies",
    duration: "2018 - 2020",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "CodeMasters Studio",
    duration: "2017 - 2018",
    logo: "https://via.placeholder.com/40",
  },
];
