import styles from './style.module.scss';
import { GiBugleCall } from 'react-icons/gi';
import { GoDashboard } from 'react-icons/go';
import { BiSearchAlt } from 'react-icons/bi';

export function MenuUser() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li><a className={styles.active} href='#'><GoDashboard /><span> Dashboard </span></a></li>
          <li><a href='#'><BiSearchAlt /><span> Sobre </span></a></li>
          <li><a href='#'><GiBugleCall /><span> Contato</span></a></li>
        </ul>
      </nav>
    </div>
  )
}