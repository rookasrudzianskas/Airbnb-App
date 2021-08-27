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

                    <div className="hidden lg:inline-flex">
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Cancellation Flexibility</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;
