import 'styles/bases/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/pages/home/logo2.png" />
      </Head>

      {<Component {...pageProps} />}
    </>
  )
}

export default MyApp
