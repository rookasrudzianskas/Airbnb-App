import React, {useEffect} from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";

const Search = () => {

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


    return (


        <div className="scrollbar-hide">
            <Head>
                <title>Airbnb search results</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays for 5 number of guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;
