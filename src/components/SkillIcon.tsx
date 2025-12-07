import { 
  Code2, 
  FileCode, 
  Braces, 
  Database, 
  Server, 
  Globe, 
  Smartphone,
  Palette,
  Cloud,
  Container,
  GitBranch,
  TestTube,
  Zap,
  CreditCard,
  Users,
  Workflow,
  Terminal,
  Layers,
  Box,
  Settings
} from "lucide-react";

interface SkillIconProps {
  iconName?: string;
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  // Languages
  js: <Braces className="h-3.5 w-3.5" />,
  ts: <FileCode className="h-3.5 w-3.5" />,
  python: <Terminal className="h-3.5 w-3.5" />,
  java: <Code2 className="h-3.5 w-3.5" />,
  ruby: <Layers className="h-3.5 w-3.5" />,
  
  // Frontend
  html: <Globe className="h-3.5 w-3.5" />,
  css: <Palette className="h-3.5 w-3.5" />,
  react: <Zap className="h-3.5 w-3.5" />,
  vue: <Box className="h-3.5 w-3.5" />,
  figma: <Palette className="h-3.5 w-3.5" />,
  
  // Backend
  nodejs: <Server className="h-3.5 w-3.5" />,
  express: <Server className="h-3.5 w-3.5" />,
  flask: <Terminal className="h-3.5 w-3.5" />,
  rails: <Layers className="h-3.5 w-3.5" />,
  api: <Globe className="h-3.5 w-3.5" />,
  
  // Databases
  postgresql: <Database className="h-3.5 w-3.5" />,
  mongodb: <Database className="h-3.5 w-3.5" />,
  mysql: <Database className="h-3.5 w-3.5" />,
  sqlite: <Database className="h-3.5 w-3.5" />,
  orm: <Layers className="h-3.5 w-3.5" />,
  odm: <Layers className="h-3.5 w-3.5" />,
  
  // DevOps
  docker: <Container className="h-3.5 w-3.5" />,
  aws: <Cloud className="h-3.5 w-3.5" />,
  cicd: <Workflow className="h-3.5 w-3.5" />,
  jenkins: <Settings className="h-3.5 w-3.5" />,
  github: <GitBranch className="h-3.5 w-3.5" />,
  
  // Tools
  git: <GitBranch className="h-3.5 w-3.5" />,
  tdd: <TestTube className="h-3.5 w-3.5" />,
  jest: <TestTube className="h-3.5 w-3.5" />,
  socket: <Zap className="h-3.5 w-3.5" />,
  stripe: <CreditCard className="h-3.5 w-3.5" />,
  agile: <Users className="h-3.5 w-3.5" />,
  
  // Mobile
  mobile: <Smartphone className="h-3.5 w-3.5" />,
};

export const SkillIcon = ({ iconName, className }: SkillIconProps) => {
  if (!iconName || !iconMap[iconName]) {
    return <Code2 className={className || "h-3.5 w-3.5"} />;
  }
  return iconMap[iconName];
};

export default SkillIcon;
