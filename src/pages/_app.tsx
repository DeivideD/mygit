import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header/header'
import { NaveUser } from '../components/nave_user/nave-user'
import { UserProvider } from '../contexts/user'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <div className="full-container">
        <NaveUser />
        <div className="full-page">
          <Component {...pageProps} />
        </div>
      </div>
    </UserProvider>
  )
}

export default MyApp
