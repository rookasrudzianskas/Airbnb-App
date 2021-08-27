import React from 'react';
import Image from "next/image";

const MediumCard = ({img, title}) => {
    return (
        <div className="">
            <div className="relative h-80 w-80">
                <Image
                    src={img}
                    layout="fill"
                />

            </div>

            <h3>{title}</h3>

        </div>
    );
};

export default MediumCard;
