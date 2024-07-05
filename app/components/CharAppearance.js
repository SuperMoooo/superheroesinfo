import React from 'react';
import CharInfo from './CharInfo';

export default function CharAppearance({
    height,
    weight,
    eyeColor,
    hairColor,
}) {
    return (
        <section className="flex flex-col justify-center items-start w-full space-y-4">
            <CharInfo title={'Height'} info={height.join(' / ')} />
            <CharInfo title={'Weight'} info={weight.join(' / ')} />

            <CharInfo title={'Eye color'} info={eyeColor} />
            <CharInfo title={'Hair color'} info={hairColor} />
        </section>
    );
}
