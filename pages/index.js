import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

export default function Home({exploreData, cardsData}) {
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
                {/* very clever stuff in here*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {exploreData?.map(({img, distance, location}) => (
                        <SmallCard key={img} img={img} distance={distance}  location={location} />
                    ))}
                </div>
            </section>


            <section className="">
                <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

                <div className="flex space-x-4 overflow-scroll ">
                    {cardsData?.map(({img, title}) => (
                        <MediumCard key={img} img={img} title={title}/>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}


// static side rendering, works just in the pages folder

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then((res) =>
        res.json()
    );

    const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
        res.json()
    );


    return {
        props: {
            // passes data back from the server to the functional component in the browser level
            exploreData: exploreData,
            cardsData: cardsData,
        }
    }
}
