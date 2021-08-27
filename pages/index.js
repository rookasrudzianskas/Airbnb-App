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

        <main className="max-w-7xl mx-auto">
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5" >Explore Nearby</h2>
            </section>
        </main>
    </div>
  )
}
