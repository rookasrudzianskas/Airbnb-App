import React from 'react';
import Image from "next/image";
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";

const InfoCard = ({img, location, title, description, star, price}) => {
    return (
        <div className="flex flex-row">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div>
                    <p className="flex items-center"><StarIcon className="h-5 text-red-400" />{star}</p>
                </div>

            </div>

        </div>
    );
};

export default InfoCard;
