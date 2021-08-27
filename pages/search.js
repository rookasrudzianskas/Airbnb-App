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

            <Footer />
        </div>
    );
};

export default Search;
