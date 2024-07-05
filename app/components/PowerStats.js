import React from 'react';
import StatsBar from './StatsBar';

export default function PowerStats({
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
}) {
    return (
        <section className="w-full flex flex-col justify-center items-center ">
            <ul className="w-full space-y-4">
                <StatsBar title={'Intelligence'} value={intelligence} />
                <StatsBar title={'Strength'} value={strength} />
                <StatsBar title={'speed'} value={speed} />
                <StatsBar title={'durability'} value={durability} />
                <StatsBar title={'power'} value={power} />
                <StatsBar title={'combat'} value={combat} />
            </ul>
        </section>
    );
}
