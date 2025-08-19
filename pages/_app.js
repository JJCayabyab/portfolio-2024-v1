/** LIBRARIES */
import Head from "next/head";
import '../styles/globals.scss'

const MyApp = (props) => {

  let {
    Component,
    pageProps,
  } = props;

  let componentProps = {
    ...pageProps,
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1" />
        <title>Jeremy's Portfolio</title>
        <link rel="icon" href="/static/images/logo-j.png" type="image/png" />
      </Head>
      <Component {...componentProps} />
    </>
  )

}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let props = { pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) };
  return props;
}

export default MyApp;