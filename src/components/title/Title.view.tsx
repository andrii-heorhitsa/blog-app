import styles from "./Title.module.css";
import typography from "@/styles/typography.module.css";

interface TitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function Title({ children, as = "h2", className }: TitleProps) {
  const TitleTag = as;
  const sizeClass = typography[as];

  return (
    <TitleTag className={`${styles.title} ${sizeClass} ${className || ""}`}>
      {children}
    </TitleTag>
  );
}
