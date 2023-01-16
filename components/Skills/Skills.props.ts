import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tags: string[];
  children?: ReactNode;
}