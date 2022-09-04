import { useState, createContext, useEffect } from 'react'
import { User } from '../model/user';
import { api } from '../service/api';

export const UserContext = createContext({});

export function UserProvider(props: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    const fetchData = async () => {
      await api.get('users/deivided').then(response => {
        setUser(response.data);
      });
    }
    fetchData();
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
    { props.children }
    </UserContext.Provider>
  )
}
