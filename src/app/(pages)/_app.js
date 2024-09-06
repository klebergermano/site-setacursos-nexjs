import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)

  }


  return (
    <>
      <Head>

        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        <meta name="viewport" content="viewport-fit=cover" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp