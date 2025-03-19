import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>BOARD</h1>
        <p>con.trol.your.self!</p>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/login"
            rel="noopener noreferrer"
          >
            Let's Go
          </a>
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
          href="/about"
        >
          <Image
            aria-hidden
            src="/bingo.png"
            alt="Bingo icon"
            width={24}
            height={24}
          />
          Learn more
        </Link>
      </footer>
    </div>
  );
}
