import {LeagueStandingsProvider} from '../context/LeagueStandings';
import {ThemeProvider} from '../context/ThemeContext';
import App from 'next/app'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return <LeagueStandingsProvider><ThemeProvider><Component {...pageProps} /></ThemeProvider></LeagueStandingsProvider>
  }
}

export default MyApp