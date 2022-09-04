
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './style.module.scss'

export function SigIn() {
  const isLogged = false;

  return isLogged ? (<button className={styles.button} type="button">
   <FaGithub color="04d361" /> Deivide Duarte <FiX color="737380" className={styles.closeIcon} />
  </button>
  ) : (<button className={styles.button}  type="button">
    <FaGithub color="eba417" />signIn with gitHub
  </button>);
}