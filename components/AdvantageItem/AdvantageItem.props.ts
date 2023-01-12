import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface AdvantageItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  title: string;
  children: ReactNode;
}