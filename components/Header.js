import React, {useState} from 'react';
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid';

const Header = () => {

    const [searchInput, setSearchInput] = useState('');

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
                <input value={searchInput}
                       onChange={(e) => setSearchInput(e.target.value)}
                       type="text" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" placeholder={"Start your search"}/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
            {/*    right    */}
                <p className="hidden md:inline hover:cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon  className="h-6 cursor-pointer"/>
                    <UserCircleIcon  className="h-6 cursor-pointer"/>
                </div>
            </div>


            {searchInput && (
            <div>

            </div>
            )}

        </header>
    );
};

export default Header;
