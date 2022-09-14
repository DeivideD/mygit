import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from './style.module.scss'

export function SocialUser(){
  return(
    <div className={styles.social}>
      <FaGithub size="25" />
      <FaLinkedin size="25" />
      <FaWhatsapp size="25" />
    </div>
  )
}