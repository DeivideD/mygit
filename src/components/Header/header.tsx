import { SigIn } from '../SignIn/sigin';
import styles from './style.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <a href="#">My Page</a>
      <nav className={styles.nav}>
        <ul>
          <li><a className={styles.active} href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <SigIn />
    </div>
  );
}