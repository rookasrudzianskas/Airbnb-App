import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Search = () => {
    return (
        <div className="">
            <Head>
                <title>Airbnb search results</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <main className="flex">
                <section>
                    <p className="text-xs">300+ stays for 5 number of guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;
