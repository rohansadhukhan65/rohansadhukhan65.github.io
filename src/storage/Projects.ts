export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  demoLink?: string;
  codeLink?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and product management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "TypeScript" , "Redux", "Material UI"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Web Development",
    demoLink: "https://ecommerce-demo.com",
    codeLink: "https://github.com/rohan/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team functionalities.",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Productivity",
    demoLink: "https://taskapp-demo.com",
    codeLink: "https://github.com/rohan/taskapp",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard for business analytics with customizable widgets and data visualization.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Data Visualization",
    demoLink: "https://analytics-demo.com",
    codeLink: "https://github.com/rohan/analytics",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A responsive social media application with real-time messaging, feed updates, and profile customization.",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Social Media",
    demoLink: "https://social-demo.com",
    codeLink: "https://github.com/rohan/social",
  },
  {
    id: 5,
    title: "Travel Booking System",
    description:
      "A comprehensive travel booking platform with flight, hotel, and experience reservations.",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Travel",
    demoLink: "https://travel-demo.com",
    codeLink: "https://github.com/rohan/travel",
  },
  {
    id: 6,
    title: "AI Image Generator",
    description:
      "An application that uses AI to generate unique images based on text prompts.",
    technologies: ["React", "Python", "TensorFlow", "Flask"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "AI/ML",
    demoLink: "https://ai-image-demo.com",
    codeLink: "https://github.com/rohan/ai-image",
  },
  {
    id: 7,
    title: "Fitness Tracker App",
    description:
      "A mobile-first fitness application for tracking workouts, nutrition, and health metrics.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Health & Fitness",
    demoLink: "https://fitness-demo.com",
    codeLink: "https://github.com/rohan/fitness",
  },
  {
    id: 8,
    title: "Real Estate Platform",
    description:
      "A real estate marketplace with property listings, virtual tours, and agent connections.",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Real Estate",
    demoLink: "https://realestate-demo.com",
    codeLink: "https://github.com/rohan/realestate",
  },
  {
    id: 9,
    title: "Language Learning App",
    description:
      "An interactive language learning platform with speech recognition and personalized lessons.",
    technologies: ["React", "Node.js", "MongoDB", "Web Speech API"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Education",
    demoLink: "https://language-demo.com",
    codeLink: "https://github.com/rohan/language",
  },
  {
    id: 10,
    title: "Cryptocurrency Tracker",
    description:
      "A real-time cryptocurrency tracking application with price alerts and portfolio management.",
    technologies: ["React", "WebSockets", "Redux", "Chart.js"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Finance",
    demoLink: "https://crypto-demo.com",
    codeLink: "https://github.com/rohan/crypto",
  },
  {
    id: 11,
    title: "Music Streaming Service",
    description:
      "A music streaming platform with playlist creation, artist discovery, and user recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "Web Audio API"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Entertainment",
    demoLink: "https://music-demo.com",
    codeLink: "https://github.com/rohan/music",
  },
  {
    id: 12,
    title: "Weather Forecast App",
    description:
      "A weather forecast application with location detection, daily and weekly forecasts.",
    technologies: ["React", "Weather API", "Geolocation API", "Chart.js"],
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-040-pub-changepoint-screenshot-1681992126.png",
    category: "Utility",
    demoLink: "https://weather-demo.com",
    codeLink: "https://github.com/rohan/weather",
  },
];
