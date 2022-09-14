import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import style from './style.module.scss'
import { UserProfile } from './user_profile/user-profile';
import { SocialUser } from './social_user/social-user';
import { InfoProfile } from './info_profile/info_profile';
import { MenuUser } from './menu_user/menu_user';
import { AiFillCopyrightCircle } from "react-icons/ai";

export function NaveUser() {
  const { user } = useContext(UserContext);

  return (
    <nav className={style.nav}>
      <UserProfile />
      <SocialUser />
      <InfoProfile />
      <MenuUser />
      <p className={style.copy}>
        <AiFillCopyrightCircle />
        Todos os direitos reservados
      </p>
    </nav>
  )
}
