import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";


export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>BOARD</h1>
        <p>Welcome to Bingo</p>
        <div className={styles.ctas}>
          <a
            href="/signup"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Sign Up
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link
          href="/"
        >
         
          Back
        </Link>
      </footer>
    </div>
  );
}
