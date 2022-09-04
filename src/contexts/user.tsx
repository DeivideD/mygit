import { useState, createContext, useEffect } from 'react'
import { User, newUser } from '../model/user';
import { api } from '../service/api';

export interface userContext {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<userContext>({} as userContext);

export function UserProvider(props: React.PropsWithChildren<{}>) {

  const [user, setUser] = useState<User>( newUser )

  const fetchData = async () => {
    await api.get('users/deivided').then(response => {
      setUser(response.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
    { props.children }
    </UserContext.Provider>
  )
}
