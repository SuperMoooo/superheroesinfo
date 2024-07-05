import React from 'react';
import CharInfo from './CharInfo';

export default function CharConnections({ groupAffiliation, relatives }) {
    return (
        <section className="flex flex-col justify-center items-start w-full space-y-4">
            <CharInfo title={'Group affiliation'} info={groupAffiliation} />
            <CharInfo
                title={'Relatives'}
                info={relatives === '-' ? 'Unknown' : relatives}
            />
        </section>
    );
}
