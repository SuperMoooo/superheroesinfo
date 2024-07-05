import React from 'react';

export default function CharInfo({ title, info }) {
    return (
        <div className="text-left text-xl flex flex-row space-x-2">
            <h1 className="text-xl font-bold text-yellow-600">{title}:</h1>
            <h1 className="font-thin">{info}</h1>
        </div>
    );
}
