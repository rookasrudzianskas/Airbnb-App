import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Rookas Airbnb</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

            <Header />
            <Banner />
    </div>
  )
}
