import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Rookas Airbnb</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

        <div>
            <Header />
        </div>
    {/*    Banner   */}
    </div>
  )
}
