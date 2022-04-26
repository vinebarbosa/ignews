import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SingInButton() {
  const isUserSignedIn = true;

  return isUserSignedIn ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04d361" />
      <span>Vine Barbosa</span>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color="#eba417" />
      <span>Sign in with Github</span>
    </button>
  );
}
