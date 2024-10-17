import {
  CssIcon,
  DjangoIcon,
  DockerIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  TailwindCSSIcon,
} from "@/components/icons/skillsIcons";
import { FC } from "react";

// Define the type for each skill
type Skill = {
  name: string;
  Icon: FC<{ width?: number; height?: number }>; // Type for the Icon component prop
};

// Skills array
const skills: Skill[] = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "React", Icon: ReactIcon },
  //   { name: "Next.js", Icon: NextJsIcon },
  { name: "Node.js", Icon: NodeIcon },
  //   { name: "TypeScript", Icon: TypescriptIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "Django", Icon: DjangoIcon },
  //   { name: "FastAPI", Icon: FastAPIIcon },
  //   { name: "PostgreSQL", Icon: PostgreSQLIcon },
  //   { name: "MySQL", Icon: MySQLIcon },
  { name: "Tailwind CSS", Icon: TailwindCSSIcon },
  { name: "Git", Icon: GitIcon },
  { name: "Docker", Icon: DockerIcon },
  // Add more skills as necessary
];

export default skills;
