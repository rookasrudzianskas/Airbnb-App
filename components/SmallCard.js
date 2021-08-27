import React from 'react';
import Image from "next/image";

const SmallCard = ({img, location, distance}) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 easy-out">
        {/*    Left     */}
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

        {/*    right    */}

            <div className="">
                <h2>{location}</h2>
                <h2>{distance}</h2>
            </div>
        </div>
    );
};

export default SmallCard;
