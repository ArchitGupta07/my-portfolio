import {
  CsharpIcon,
  CssIcon,
  DjangoIcon,
  DockerIcon,
  DotnetIcon,
  ExpressIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  SwiftIcon,
  SwiftUiIcon,
  TailwindCSSIcon,
  TypescriptIcon,
} from "@/components/icons/skillsIcons";
import { FC } from "react";

// Define the type for each skill
type Skill = {
  name: string;
  Icon: FC<{ width?: number; height?: number }>; // Type for the Icon component prop
};

// Skills array
const skills: Skill[] = [
  { name: "Python", Icon: PythonIcon },
  { name: "C#", Icon: CsharpIcon },
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "TypeScript", Icon: TypescriptIcon },
  { name: "Postman", Icon: PostmanIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Redux", Icon: ReduxIcon },
  { name: "Swift", Icon: SwiftIcon },
  { name: "Swift UI", Icon: SwiftUiIcon },
  //   { name: "Next.js", Icon: NextJsIcon },
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "Scss", Icon: ScssIcon },
  { name: "Express", Icon: ExpressIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Django", Icon: DjangoIcon },
  { name: ".Net", Icon: DotnetIcon },
  //   { name: "FastAPI", Icon: FastAPIIcon },
  //   { name: "PostgreSQL", Icon: PostgreSQLIcon },
  //   { name: "MySQL", Icon: MySQLIcon },
  { name: "Tailwind CSS", Icon: TailwindCSSIcon },
  { name: "Git", Icon: GitIcon },
  { name: "Docker", Icon: DockerIcon },
  // Add more skills as necessary
];

export default skills;
