import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header/header'
import { NaveUser } from '../components/naveuser/nave-user'
import { UserProvider } from '../contexts/user'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <div className="full-container">
        <NaveUser />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  )
}

export default MyApp
