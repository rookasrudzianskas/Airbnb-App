import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <header>


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
