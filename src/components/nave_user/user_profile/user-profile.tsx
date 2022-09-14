import Image from 'next/image'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user';
import style from './style.module.scss'



export function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div className={style.container}>
      <Image className={style.image}
        src={user.avatar_url}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <p>{user.name}</p>
    </div>
  )
}