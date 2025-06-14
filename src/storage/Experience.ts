interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Ltd",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of enterprise-grade web applications for Fortune 500 clients with focus on performance and scalability.",
    responsibilities: [
      "Architecting scalable microservice solutions using React and Node.js",
      "Leading a team of 5 developers and mentoring junior team members",
      "Implementing CI/CD pipelines and optimizing deployment workflows",
      "Collaborating with product managers to define technical requirements",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Docker",
      "GraphQL",
    ],
    logo: "",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    duration: "2020 - 2022",
    location: "Austin, TX",
    description:
      "Developed and maintained multiple customer-facing applications with focus on responsive design and performance optimization.",
    responsibilities: [
      "Built RESTful APIs and integrations with third-party services",
      "Implemented responsive UI components using React and Material UI",
      "Optimized database performance and query efficiency",
      "Participated in agile development process and code reviews",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Express",
      "MongoDB",
      "Redux",
      "Material UI",
    ],
    logo: "",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebCraft Technologies",
    duration: "2018 - 2020",
    location: "Boston, MA",
    description:
      "Focused on creating intuitive user interfaces and implementing frontend features for web applications.",
    responsibilities: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Collaborated with designers to implement UI/UX designs with pixel-perfect accuracy",
      "Improved page load times by 40% through code optimization",
      "Implemented unit tests and end-to-end testing using Jest and Cypress",
    ],
    technologies: ["JavaScript", "React", "HTML5", "CSS3", "SASS", "Webpack"],
    logo: "",
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "CodeMasters Studio",
    duration: "2017 - 2018",
    location: "Chicago, IL",
    description:
      "Started career working on website development projects and learning modern web technologies.",
    responsibilities: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript",
      "Assisted in bug fixing and implementation of new features",
      "Collaborated with design team to implement visual elements",
      "Participated in code reviews to improve code quality",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    logo: "",
  },
];
