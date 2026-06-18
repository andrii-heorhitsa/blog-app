import styles from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function Title({ children, as = "h2", className }: TitleProps) {
  const TitleTag = as;

  return (
    <TitleTag className={`${styles.title}${className || ""}`}>
      {children}
    </TitleTag>
  );
}
