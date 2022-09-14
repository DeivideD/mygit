import { SigIn } from '../SignIn/sigin';
import styles from './style.module.scss';
import { SiAboutdotme } from 'react-icons/si';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <a className={styles.logo} href='#'><span>.</span><SiAboutdotme /></a>
      <nav className={styles.nav}>
        <ul>
          <li><a className={styles.active} href='#'>Home</a></li>
          <li><a href='#'>Sobre</a></li>
          <li><a href='#'>Contato</a></li>
        </ul>
      </nav>
      <SigIn />
    </div>
  );
}