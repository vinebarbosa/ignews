import Image from "next/image";
import { SingInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-content"]}>
        <Image
          height={31}
          width={110}
          src="/images/logo.svg"
          alt="Logo do ig.news. A logo do ig.news é uma imagem contendo a palavra ig.news"
        />

        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  );
}
