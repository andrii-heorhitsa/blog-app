import styles from "./ScrollToTopButton.module.css";

type ScrollToTopButtonViewProps = {
  isVisible: boolean;
  onClick: () => void;
};

export default function ScrollToTopButtonView({
  isVisible,
  onClick,
}: ScrollToTopButtonViewProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll Up"
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
    >
      ↑
    </button>
  );
}
