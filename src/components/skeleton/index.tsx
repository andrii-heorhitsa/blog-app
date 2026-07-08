import styles from "./skeleton.module.css";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  className?: string;
}

export default function Skeleton({
  width,
  height,
  circle,
  className = "",
}: SkeletonProps) {
  const formatSize = (
    value: string | number | undefined,
    defaultValue: string,
  ) => {
    if (value === undefined) return defaultValue;
    return typeof value === "number" ? `${value}px` : value;
  };
  const customStyles: React.CSSProperties = {
    width: formatSize(width, "100%"),
    height: formatSize(height, "16px"),
    borderRadius: circle ? "50%" : undefined,
  };

  const combinedClasses = `${styles.base} ${className}`.trim();

  return <div className={combinedClasses} style={customStyles} />;
}
