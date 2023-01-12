import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}