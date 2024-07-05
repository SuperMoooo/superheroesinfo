import React from 'react';

export default function CharacterHeader({
    charImg,
    charName,
    charFullName,
    charPublisher,
    gender,
    race,
    alignment,
}) {
    return (
        <article className=" w-full flex items-center justify-start lg:space-x-8 mb-6 lg:flex-row flex-col lg:mt-0 mt-6">
            <picture className="h-72 w-72 border-[1px] border-[#1f1f1f] rounded-full overflow-hidden">
                <img src={charImg} alt={charFullName} />
            </picture>
            <section className="flex flex-1 sm:flex-row flex-col items-center justify-between  lg:justify-start sm:py-0 w-full lg:mt-0 mt-6">
                <ul className="flex flex-col  justify-center w-full items-center  space-y-2  flex-1">
                    <li className="sm:text-5xl text-4xl font-bold">
                        {charName}
                    </li>
                    <li className="sm:text-3xl text-2xl font-normal">
                        {charFullName === '-' ? 'Unknown' : charFullName}
                    </li>
                    <li className="sm:text-xl text-lg font-thin ">
                        {charPublisher}
                    </li>
                </ul>
                <hr className="w-full bg-[#1f1f1f] h-[1px] border-none sm:w-[1px] sm:h-28 sm:py-0 my-4" />
                <ul className="flex flex-col items-center justify-center space-y-2 w-full flex-1 ">
                    <li className=" flex flex-row space-x-2 items-center justify-center">
                        <h4 className="text-2xl font-thin text-yellow-400">
                            Gender:
                        </h4>
                        <h5 className="font-thin text-xl">{gender}</h5>
                    </li>
                    <li className="flex flex-row space-x-2 items-center justify-center">
                        <h4 className="text-2xl font-thin text-yellow-400">
                            Race:
                        </h4>
                        <h5 className="font-thin text-xl">
                            {race == 'null' ? '???' : race}
                        </h5>
                    </li>
                    <li className="flex flex-row space-x-2 items-center justify-center">
                        <h4 className="text-2xl font-thin text-yellow-400 ">
                            Alignment:
                        </h4>
                        <h5 className="font-thin text-xl ">
                            {alignment.charAt(0).toUpperCase() +
                                alignment.slice(1)}
                        </h5>
                    </li>
                </ul>
            </section>
        </article>
    );
}
