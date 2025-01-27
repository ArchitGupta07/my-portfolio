export interface Project {
  name: string;
  description: string;
  year: number;
  type: string;
  imageSrc: string;
  githubLink: string;
  deployedLink: string;
}

export const projects: Project[] = [
  {
    name: "Exam Platform",
    description:
      "An online examination platform that includes features like timed exams, secure submission, and preventing users from leaving the page during the test.",
    year: 2024,
    type: "Web Application",
    imageSrc: "/examPlatform.png",
    githubLink: "https://github.com/arguptaex/ExamPlatform_App", // Add the actual GitHub link
    deployedLink: "https://examplatform.example.com", // Add the actual deployed URL
  },
  {
    name: "SignSwift",
    description:
      "An electronic document signing and sharing platform with secure user authentication, drag-and-drop functionality, and document management.",
    year: 2024,
    type: "Web Application",
    imageSrc: "/signSwiftImg.png",
    githubLink: "https://github.com/arguptaex/SignSwift_App", // Add the actual GitHub link
    deployedLink: "https://signswift.example.com", // Add the actual deployed URL
  },
  {
    name: "Advance Resume Management System",
    description:
      "A resume management system that allows parsing, categorizing, and searching resumes based on specific job roles and skill sets.",
    year: 2023,
    type: "API/Backend",
    imageSrc: "/images/talentrack.png",
    githubLink: "https://github.com/arguptaex/TalenTrack_App", // Add the actual GitHub link
    deployedLink: "https://talentrack.example.com", // Add the actual deployed URL
  },
  {
    name: "Portfolio Showcase",
    description:
      "A dynamic web application that allows users to present their projects with GitHub links, descriptions, and deployment URLs in a social media-inspired format.",
    year: 2023,
    type: "Web Application",
    imageSrc: "/examPlatform.png",
    githubLink: "https://github.com/arguptaex/Portfolio_Showcase", // Add the actual GitHub link
    deployedLink: "https://portfolio.example.com", // Add the actual deployed URL
  },

  // {
  //   name: "Resume Parser",
  //   description:
  //     "A tool that extracts and analyzes data from resumes using Python to match job seekers with relevant roles, ensuring 85% parsing accuracy.",
  //   year: 2024,
  //   type: "Backend Tool",
  //   imageSrc: "/images/resume-parser.png",
  //   githubLink: "https://github.com/arguptaex/ResumeParser_App", // Add the actual GitHub link
  //   deployedLink: "https://resumeparser.example.com", // Add the actual deployed URL
  // },
  // {
  //   name: "Referral Form Handler",
  //   description:
  //     "RESTful APIs that handle referral form data and connect with a MySQL database using Prisma ORM, including email referral functionality.",
  //   year: 2024,
  //   type: "Backend Service",
  //   imageSrc: "/images/referral-form.png",
  //   githubLink: "https://github.com/arguptaex/ReferralFormHandler_App", // Add the actual GitHub link
  //   deployedLink: "https://referralformhandler.example.com", // Add the actual deployed URL
  // },
  // {
  //   name: "Image Header/Footer Detector",
  //   description:
  //     "A tool that detects and processes headers and footers of images based on their color variations for better document management.",
  //   year: 2023,
  //   type: "Image Processing",
  //   imageSrc: "/images/image-detector.png",
  //   githubLink: "https://github.com/arguptaex/ImageDetector_App", // Add the actual GitHub link
  //   deployedLink: "https://imagedetector.example.com", // Add the actual deployed URL
  // },
];
