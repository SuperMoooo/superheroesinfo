import React from 'react';

export default function Separator({ title }) {
    return (
        <div className="relative  w-full my-16">
            <hr className="w-full bg-[#1f1f1f] h-[1px] border-none " />
            <h3 className="absolute top-[-15px] left-16 getBg px-4 text-2xl font-thin italic uppercase">
                {title}
            </h3>
        </div>
    );
}
