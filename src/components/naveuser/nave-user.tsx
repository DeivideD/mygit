import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import style from './style.module.scss'

export function NaveUser() {
  const { user } = useContext( UserContext );
  
  return (
    <nav className={style.nav}>
      {/* <Image
        loader={myLoader}
        src={user.}
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
    </nav>
  )
}