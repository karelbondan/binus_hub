import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import app_context from '../app_context';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  // useEffect(() => {
  //   if (isBurgerOpened) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'visible';
  //   }
  //   console.log(isBurgerOpened);
  // }, [isBurgerOpened])

  return (
    <app_context.Provider
      value={{ isBurgerOpened: isBurgerOpened, setIsBurgerOpened: setIsBurgerOpened }}>
      {showHeader && <Navbar />}
      <Component {...pageProps} />
      {showHeader && <Footer />}
    </app_context.Provider>
  )
}

export default MyApp
