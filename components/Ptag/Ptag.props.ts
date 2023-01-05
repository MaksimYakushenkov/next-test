import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    fontSize?: 'regular' | 'medium' | 'large';
    children: ReactNode;
}