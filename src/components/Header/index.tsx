import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="tomate.news" />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
