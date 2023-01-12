import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { PageModel } from "../../interfaces/page.interface";

export interface SkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tags: string[];
  children?: ReactNode;
}