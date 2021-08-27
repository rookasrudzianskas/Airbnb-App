import React from 'react';
import Image from "next/image";
import { SearchIcon } from '@heroicons/react/solid';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">


            <div className="relative flex items-center h-10 cursor-pointer my-auto">
            {/* left    */}
                <Image
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit={'contain'}
                    objectPosition={'left'}
                />
            </div>

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            {/*    middle   */}
                <input type="text" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" placeholder={"Start your search"}/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <div>
            {/*    right    */}

            </div>


        </header>
    );
};

export default Header;
