import { Title } from "@/components/title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <main className={styles.container}>
        <Title as="h1">Dev.to Reader Title</Title>
      </main>
    </div>
  );
}
