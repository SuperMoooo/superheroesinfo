import React from 'react';

export default function StatsBar({ title, value }) {
    return (
        <li className="w-full flex flex-row items-center justify-start space-x-4 ">
            <div className="w-48">
                <h1
                    className={`uppercase  font-bold md:text-xl text-lg ${
                        value === 'null' && 'mr-7'
                    }`}
                >
                    {title}
                </h1>
            </div>
            <div className="md:w-full w-2/3">
                <div
                    style={{
                        width: value === 'null' ? '0%' : parseInt(value) + '%',
                    }}
                    className={` h-full bg-yellow-600 flex justify-end  `}
                >
                    <h2 className="mr-2 font-bold">
                        {value == 'null' ? '???' : value}
                    </h2>
                </div>
            </div>
        </li>
    );
}
