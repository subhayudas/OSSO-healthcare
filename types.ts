import { IconType } from "react-icons";

export interface AboutSection {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  variant: "default" | "withIcon" | "large" | "calendar";
  className?: string;
}
