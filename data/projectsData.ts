export interface Project {
  name: string;
  description: string;
  year: number;
  type: string;
  imageSrc: string; // Add image source URL or path here
}

export const projects: Project[] = [
  {
    name: "SignSwift",
    description:
      "An electronic document signing and sharing platform with secure user authentication, drag-and-drop functionality, and document management.",
    year: 2024,
    type: "Web Application",
    imageSrc: "/images/signswift.png", // Add the actual path to the image
  },
  {
    name: "TalenTrack",
    description:
      "A resume management system that allows parsing, categorizing, and searching resumes based on specific job roles and skill sets.",
    year: 2023,
    type: "API/Backend",
    imageSrc: "/images/talentrack.png", // Add the actual path to the image
  },
  {
    name: "Portfolio Showcase",
    description:
      "A dynamic web application that allows users to present their projects with GitHub links, descriptions, and deployment URLs in a social media-inspired format.",
    year: 2023,
    type: "Web Application",
    imageSrc: "/images/portfolio.png", // Add the actual path to the image
  },
  {
    name: "Exam Platform",
    description:
      "An online examination platform that includes features like timed exams, secure submission, and preventing users from leaving the page during the test.",
    year: 2024,
    type: "Web Application",
    imageSrc: "/images/exam-platform.png", // Add the actual path to the image
  },
  {
    name: "Resume Parser",
    description:
      "A tool that extracts and analyzes data from resumes using Python to match job seekers with relevant roles, ensuring 85% parsing accuracy.",
    year: 2024,
    type: "Backend Tool",
    imageSrc: "/images/resume-parser.png", // Add the actual path to the image
  },
  {
    name: "Referral Form Handler",
    description:
      "RESTful APIs that handle referral form data and connect with a MySQL database using Prisma ORM, including email referral functionality.",
    year: 2024,
    type: "Backend Service",
    imageSrc: "/images/referral-form.png", // Add the actual path to the image
  },
  {
    name: "Image Header/Footer Detector",
    description:
      "A tool that detects and processes headers and footers of images based on their color variations for better document management.",
    year: 2023,
    type: "Image Processing",
    imageSrc: "/images/image-detector.png", // Add the actual path to the image
  },
];
