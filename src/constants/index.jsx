import { School } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Cloud } from "lucide-react";
import { Code } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const services = [
  {
    title: "HTML,CSS,JavaScript",

    image: user1,
    text: " I provide front-end development services using HTML, CSS, and JavaScript to create responsive, user-friendly, and visually appealing websites. My expertise includes building structured web pages, styling with modern CSS techniques, and adding interactivity using JavaScript for a seamless user experience.",
  },
  {
    title: "React Js",

    image: user2,
    text: "Build dynamic and responsive web applications with React.js for a seamless user experience. Using a component-based approach, achieve efficient state management, reusable UI components, and optimized performance. Ensure fast rendering and smooth interactions for modern web.",
  },
  {
    title: "WordPress",

    image: user3,
    text: "Create professional and fully customizable websites with WordPress for businesses, blogs, and portfolios. Build responsive and SEO-friendly designs with themes, plugins, and custom functionality. Ensure a smooth user experience with optimized performance and easy content management.",
  },
  {
    title: "Cloud Computing",

    image: user4,
    text: "Leverage the power of cloud computing to deploy scalable, secure, and high-performance applications. Set up and manage cloud infrastructure with reliability, cost efficiency, and flexibility. Optimize resources, enhance security, and ensure seamless scalability for modern business needs.",
  },
  {
    title: "AWS cloud",

    image: user5,
    text: "AWS Cloud provides scalable, secure, and high-performance solutions for deploying and managing applications. With services like EC2, S3, RDS, and VPC, it enables reliable cloud infrastructure and efficient resource management. Ensure cost optimization, enhanced security, and seamless scalability.",
  },
  {
    title: "Azure cloud",

    image: user6,
    text: "Azure offers scalable, secure, and high-performance cloud solutions for deploying and managing applications. With services like Virtual Machines, Azure Storage, and SQL Database, it provides a reliable infrastructure for businesses. Ensure cost efficiency, security, and seamless scalability .",
  },
];

export const Education = [
  {
    icon: <School />,
    text: "Secondary Education Milestone",
    description:
      "Completed secondary education in 2019 from Aurangabad Divisional Board with 57.20%. This laid the foundation for my academic and professional growth.",
  },
  {
    icon: <School />,
    text: "Higher Secondary Education",
    description:
      "ompleted higher secondary education in 2021 from Aurangabad Divisional Board with 82.20%. This strengthened my analytical skills and prepared me for further academic and professional growth.",
  },
  {
    icon: <GraduationCap />,
    text: "Bachelor's Degree in Computer Science",
    description:
      "Completed a Bachelor's in Computer Science from BAMU University, Aurangabad, in 2024 with 71.97%. Gained strong technical skills in software development, cloud computing, and problem-solving, laying the groundwork for a career in technology",
  },
  {
    icon: <GraduationCap />,
    text: "Master of Computer Applications (Ongoing)",
    description:
      "Pursuing a Master of Computer Applications (MCA) from BAMU University, currently in the second semester. Focused on advanced software development, cloud computing, and modern technologies to enhance problem-solving and technical expertise.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Computing in AWS – Certified Expertise ",
    description:
      "I have successfully completed a Cloud Computing in AWS course from 3RI Technologies, Pune. This training has equipped me with hands-on experience in deploying, managing, and securing cloud solutions using AWS services..",
  },
  {
    icon: <Code />,
    text: "Web Development with React.js – Self-Taught Expertise",
    description:
      "I have gained proficiency in React.js through online resources, building dynamic and responsive web applications. My hands-on learning experience includes developing interactive UI components, state management, and optimizing performance for modern web applications",
  },
];

export const Skills = [
  {
    title: "React.js – Building Dynamic Web Experiences",
    description:
      "I have hands-on experience in React.js, developing interactive and responsive web applications. My expertise includes component-based architecture, state management, and optimizing performance for seamless user experiences.",
  },
  {
    title: "Cloud Computing – Scalable & Efficient Solutions",
    description:
      "I have a strong understanding of cloud computing principles, including virtualization, networking, and security. My expertise lies in building scalable, reliable, and cost-effective cloud-based solutions for modern applications.",
  },
  {
    title: "AWS Cloud – Powerful & Scalable Solutions",
    description:
      "I have hands-on experience with AWS services, including EC2, S3, RDS, VPC, and Auto Scaling. My expertise includes deploying, managing, and optimizing cloud infrastructure to ensure high availability, security, and performance",
  },
  {
    title: "Linux – Foundational System Administration Skills",
    description:
      "As a fresher, I have a basic understanding of Linux, including command-line operations, file management, and user permissions. I am eager to enhance my skills in system administration and server management.",
  },
];

export const Projects = [
  {
    title: "Mammtas Billing Dashboard",
    details: [
      "Developed a comprehensive billing dashboard for Mammtas using React.js and modern web technologies",
      "Implemented real-time data visualization and reporting features for business analytics",
      "Created a responsive interface with interactive charts and tables for data analysis",
      "Integrated secure authentication and role-based access control",
      "Built with a focus on performance optimization and user experience",
    ],
    githubLink: "https://github.com/Sufiyanali07/Mammtas-Billing-Dashboard",
    netlifyLink: "https://mammtas-billing-dashboard.netlify.app",
  },
  {
    title: "Project TO-DO",
    details: [
      "The TO-DO project is a simple task management application that allows users to add, edit, and delete tasks efficiently. Built with React.js for a dynamic UI, it ensures a smooth user experience with real-time updates. This project demonstrates core web development skills, including state management and component-based desing",
    ],
    githubLink: "https://github.com/Sufiyanali07/To-Do-App",
    netlifyLink: "https://sufiyan-todo-app.netlify.app",
  },
  {
    title: "Project PORTFOLIO",
    details: [
      "A portfolio website built using React.js with a responsive and modern UI. It features reusable components, smooth navigation, and optimized performance. Styled with CSS/Tailwind, it ensures a clean and interactive user experience while following best practices in component-based architecture and states",
    ],
    githubLink: "https://github.com/Sufiyanali07/Portfolio",
    netlifyLink: "https://sufiyan-portfolio.netlify.app",
  },
  {
    title: "Project CALCULATOR ",
    details: [
      "A calculator application built using React.js with a clean and modern UI. It supports basic arithmetic operations like addition, subtraction, multiplication, and division. The project follows a modular component-based structure for better code organization. With smooth functionality.",
    ],
    githubLink: "https://github.com/Sufiyanali07/Calculator",
    netlifyLink: "https://calcifyio.netlify.app",
  },
];
