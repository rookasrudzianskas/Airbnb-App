import React, {useEffect} from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({searchResults}) => {


    const router = useRouter();

    // this is to access the router variables
    // console.log(router.query);
    // we destructure all the variables
    const {location, startDate, endDate, numberOfGuests} = router.query;

    const checkForNull = () => {
        if(!location || !startDate || !endDate || !numberOfGuests) {
            router.push('/');
        }
    }

    useEffect(() => {
        checkForNull();
    }, []);

    const formattedStartDate = format(new Date(startDate), "dd MMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;


    return (


        <div className="scrollbar-hide">
            <Head>
                <title>Airbnb search results</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`} />

            <main className="flex scrollbar-hide">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays - {range} - for {numberOfGuests > 1 ? `${numberOfGuests} number of guests.` : "one guest."} </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({img, location, title, description, star, price, total}) => (
                            <InfoCard key={img} total={total} img={img} location={location} title={title} description={description} star={star} price={price} />
                        ))}
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;


// to get some params or something from context
export async function getServerSideProps(context) {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults: searchResults,
        }
    }
}
