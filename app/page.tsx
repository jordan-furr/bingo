import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>BINGO</h1>
      </main>
      <footer className={styles.footer}>
        <Link
          href="/login"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn more
        </Link>
      </footer>
    </div>
  );
}
