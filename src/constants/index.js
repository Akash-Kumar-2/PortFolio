export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Experience", href: "#experience" },
  { id: 4, name: "Education", href: "#education" },
  { id: 5, name: "Skills", href: "#skills" },
  { id: 6, name: "Project", href: "#project" },
  { id: 7, name: "Contact", href: "#contact" },
];

export const myProjects = [
  {
    title: "Natour - A Tour Management System",
    desc: "Natour is a comprehensive SaaS platform built to streamline tour management. Designed with role-based access for admins and guides, it enables smooth booking processes, tour scheduling, and secure data handling.",
    subdesc:
      "Developed with Express.js, MongoDB, Node.js, and Tailwind CSS. Incorporates JWT authentication, booking APIs, and robust security practices like data sanitization and rate limiting.",
    href: "https://github.com/Akash-Kumar-2/natours",
    githubBackend: "",
    hosted: false,
    logo: "/assets/logo-green-round.png",
    logoStyle: {
      backgroundColor: "#5879",
      border: "0.2px solid #455E26",
      boxShadow: "0px 0px 60px 0px #587930",
    },
    spotlight: "/assets/spotlight3.png",
    images: [
      { id: 1, name: "Home", path: "/textures/project/natours/1.png" },
      { id: 2, name: "Login", path: "/textures/project/natours/2.png" },
      { id: 3, name: "After_Login", path: "/textures/project/natours/3.png" },
      { id: 4, name: "TourCard", path: "/textures/project/natours/4.png" },
      { id: 5, name: "TourImg", path: "/textures/project/natours/5.png" },
      { id: 6, name: "HomeFooter", path: "/textures/project/natours/6.png" },
    ],
    tags: [
      { id: 1, name: "NodeJs", path: "/assets/icons8-nodejs-48.png" },
      { id: 2, name: "CSS", path: "/assets/css-3.png" },
      { id: 3, name: "JS", path: "/assets/js.png" },
      { id: 4, name: "MongoDB", path: "/assets/icons8-mongo-db-48.png" },
    ],
  },
  {
    title: "BuyNRent - Property Booking Platform",
    desc: "BuyNRent is a SaaS platform that simplifies property booking for both hosts and renters. Users can list, edit, or delete properties seamlessly while ensuring secure user management and efficient data handling.",
    subdesc:
      "Built using Express.js, MongoDB, Node.js, React.js, and Tailwind CSS. Implements JWT and bcrypt for secure user authentication and data protection.",
    href: "https://github.com/Akash-Kumar-2/BuyNRent",
    githubBackend: "",
    hosted: false,
    logo: "/assets/airbnb.png",
    logoStyle: {
      backgroundColor: "#BD5B5A",
      border: "0.2px solid #C53C3A",
      boxShadow: "0px 0px 60px 0px #6D0C0A",
    },
    spotlight: "/assets/spotlight1.png",
    images: [
      { id: 1, name: "Home", path: "/textures/project/buynrent/1b.png" },
      { id: 2, name: "Login", path: "/textures/project/buynrent/2b.png" },
      { id: 3, name: "After_Login", path: "/textures/project/buynrent/3b.png" },
      { id: 4, name: "TourCard", path: "/textures/project/buynrent/4b.png" },
      { id: 5, name: "TourImg", path: "/textures/project/buynrent/5b.png" },
      { id: 6, name: "HomeFooter", path: "/textures/project/buynrent/6b.png" },
    ],
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "NodeJs", path: "/assets/icons8-nodejs-48.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 4, name: "MongoDB", path: "/assets/icons8-mongo-db-48.png" },
    ],
  },
  {
    title: "SyncByte - College Community Platform",
    desc: "SyncByte is a community platform connecting students and teachers of JSS Academy. It fosters collaboration through project partnerships, academic support, and community-driven initiatives.",
    subdesc:
      "Built with React.js, Node.js, Express, MongoDB, and Cloudinary. Features JWT authentication and NodeMailer for email notifications.",
    href: "https://github.com/Akash-Kumar-2/SYNCBYTE_Frontend",
    githubBackend: "https://github.com/Akash-Kumar-2/server-syncbyte",
    hosted: false,
    logo: "/assets/atglogo.jpg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    images: [
      { id: 1, name: "Home", path: "/textures/project/atg/1a.png" },
      { id: 2, name: "Login", path: "/textures/project/atg/2a.png" },
      { id: 3, name: "After_Login", path: "/textures/project/atg/3a.png" },
      { id: 4, name: "TourCard", path: "/textures/project/atg/4a.png" },
      { id: 5, name: "TourImg", path: "/textures/project/atg/5a.png" },
      { id: 6, name: "HomeFooter", path: "/textures/project/atg/6a.png" },
    ],
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "NodeJs", path: "/assets/icons8-nodejs-48.png" },
      { id: 4, name: "MongoDB", path: "/assets/icons8-mongo-db-48.png" },
      { id: 5, name: "Cloudinary", path: "/assets/cloud-computing.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const education = [
  {
    id: 1,
    year: "",
    degree: "Schooling",
    institution: "Saint James School",
    location: "Hardoi, Uttar Pradesh",
    grade: "Completed",
  },
  {
    id: 2,
    year: "2021 - 2025",
    degree: "B.Tech - Computer Science",
    institution: "JSS Academy of Technical Education",
    location: "Noida, India",
    grade: "Graduated",
  },
  {
    id: 3,
    year: "Jun - Dec 2025",
    degree: "Intern - Backend Developer",
    institution: "To The New",
    location: "Noida, India",
    grade: "Completed",
  },
  {
    id: 4,
    year: "Dec 2025 - Present",
    degree: "Backend Developer",
    institution: "To The New",
    location: "Noida, India",
    grade: "Working",
    isCurrent: true,
  },
];

export const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "To The New",
    logo: "/assets/company logo.jfif",
    duration: "Present",
    current: true,
    points: [
      "Developed backend services for IVC (Interactive Video Calling) for Max Life Insurance using Java and Spring Boot.",
      "Built and maintained Growth App - an internal upskilling and promotion recommendation platform.",
      "Worked on Bluebell, handling project allocation, deallocation, and bench utilisation workflows.",
      "Contributed to a Compensation App managing salary and compensation data with secure, scalable APIs.",
      "Worked across AWS EC2, S3, PostgreSQL, SQL, Thymeleaf, and various other enterprise technologies.",
    ],
  },
];

export const Profiles = [
  {
    id: 1,
    name: "LeetCode",
    path: "/assets/leetcode.png",
    href: "https://leetcode.com/u/akashku/",
  },
  {
    id: 2,
    name: "GeekForGeeks",
    path: "/assets/gfg.png",
    href: "https://www.geeksforgeeks.org/user/akashkzd3l/",
  },
  {
    id: 3,
    name: "CodingNinjas",
    path: "/assets/cn.png",
    href: "https://www.naukri.com/code360/profile/sky1303",
  },
  {
    id: 4,
    name: "GitHub",
    path: "/assets/github.png",
    href: "https://github.com/Akash-Kumar-2",
  },
  {
    id: 5,
    name: "LinkedIn",
    path: "/assets/link.png",
    href: "https://www.linkedin.com/in/akashkumar2025",
  },
];
