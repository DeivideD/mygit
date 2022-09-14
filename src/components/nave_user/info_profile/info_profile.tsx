import  styles  from './style.module.scss'
import { TiLocationOutline } from 'react-icons/ti';
import { BsBuilding } from 'react-icons/bs';
import { DiGitBranch } from 'react-icons/di';

export function InfoProfile(){
  return(
    <div className={styles.container}>
     <p><DiGitBranch size='20' title='Projetos: 20'/><span>deivideduarte@outlook.com</span></p>
     <p><TiLocationOutline size='20' title='Fortaleza'/><span> Fortaleza</span></p>
     <p><BsBuilding size='20' title='fortes' /><span>Fortes Tecnologia</span></p>
    </div>
  )
}