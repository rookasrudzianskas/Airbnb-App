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

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5" >Explore Nearby</h2>

                {/*pull some data from api*/}
            </section>
        </main>
    </div>
  )
}


// static side rendering, works just in the pages folder

export async function getStaticProps() {

}
