import React from 'react';
import CharInfo from './CharInfo';

export default function CharBiography({
    fullName,
    alterEgos,
    aliases,
    placeOfBirth,
    firstAppearance,
}) {
    return (
        <section className="flex flex-col justify-center items-start w-full space-y-4">
            <CharInfo title={'Full Name'} info={fullName} />
            <CharInfo title={'Alter egos'} info={alterEgos} />

            <CharInfo title={'Aliases'} info={aliases.join(', ')} />
            <CharInfo title={'Place of birth'} info={placeOfBirth} />
            <CharInfo title={'First Appearance'} info={firstAppearance} />
        </section>
    );
}
