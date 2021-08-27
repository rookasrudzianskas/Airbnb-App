import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5">


            <div className="relative flex items-center h-10 cursor-pointer my-auto">
            {/* left    */}
                <Image
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit={'contain'}
                    objectPosition={'left'}
                />
            </div>

            <div>
            {/*    middle   */}

            </div>

            <div>
            {/*    right    */}

            </div>


        </header>
    );
};

export default Header;
