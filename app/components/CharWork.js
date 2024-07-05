import React from 'react';
import CharInfo from './CharInfo';

export default function CharWork({ occupation, base }) {
    return (
        <section className="flex flex-col justify-center items-start w-full space-y-4">
            <CharInfo title={'Occupation'} info={occupation} />
            <CharInfo title={'Base'} info={base === '-' ? 'Unknown' : base} />
        </section>
    );
}
