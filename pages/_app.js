import Head from 'next/head'
import Header from '../components/Header'
import '../global-styles/main.scss'


export default function App({Component, pagePrps}) {
  return (
    <div className="container">
      <Head>
        <title>NewsBuzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pagePrps} />
    </div>
  )
}