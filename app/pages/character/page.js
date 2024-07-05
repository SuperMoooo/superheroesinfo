'use client';
import CharacterHeader from '@/app/components/CharacterHeader';
import CharAppearance from '@/app/components/CharAppearance';
import CharBiography from '@/app/components/CharBiography';
import CharConnections from '@/app/components/CharConnections';
import CharInfo from '@/app/components/CharInfo';
import CharWork from '@/app/components/CharWork';
import PowerStats from '@/app/components/PowerStats';
import Separator from '@/app/components/Separator';
import { Container } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function CharacterInfo() {
    const characterData = useSelector((state) => state.data);

    return (
        <>
            <header className=" mt-4 group">
                <Link
                    href="../"
                    className="flex flex-row items-center justify-center space-x-2 "
                >
                    <svg
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        width={50}
                        height={50}
                        className="transition-all group-hover:scale-110 duration-300"
                    >
                        <path
                            d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                            fillRule="nonzero"
                        />
                    </svg>
                    <h1 className="text-2xl  transition-all">Go Back</h1>
                </Link>
            </header>
            <Container>
                <CharacterHeader
                    charImg={characterData.image.url}
                    charName={characterData.name}
                    charFullName={characterData.biography['full-name']}
                    charPublisher={characterData.biography['publisher']}
                    gender={characterData.appearance['gender']}
                    race={characterData.appearance['race']}
                    alignment={characterData.biography['alignment']}
                />

                <article className="flex flex-row justify-center items-center w-full mb-16">
                    <section className="flex-1 flex items-start justify-start flex-col h-full w-full">
                        <Separator title={'Power stats'} />

                        <PowerStats
                            intelligence={characterData.powerstats.intelligence}
                            strength={characterData.powerstats.strength}
                            speed={characterData.powerstats.speed}
                            durability={characterData.powerstats.durability}
                            power={characterData.powerstats.power}
                            combat={characterData.powerstats.combat}
                        />
                        <Separator title={'biography'} />
                        <CharBiography
                            fullName={characterData.biography['full-name']}
                            alterEgos={characterData.biography['alter-egos']}
                            aliases={characterData.biography['aliases']}
                            placeOfBirth={
                                characterData.biography['place-of-birth']
                            }
                            firstAppearance={
                                characterData.biography['first-appearance']
                            }
                        />

                        <Separator title={'appearance'} />

                        <CharAppearance
                            height={characterData.appearance.height}
                            weight={characterData.appearance.weight}
                            eyeColor={characterData.appearance['eye-color']}
                            hairColor={characterData.appearance['hair-color']}
                        />

                        <Separator title={'work'} />

                        <CharWork
                            occupation={characterData.work.occupation}
                            base={characterData.work.base}
                        />

                        <Separator title={'Connections'} />
                        <CharConnections
                            groupAffiliation={
                                characterData.connections['group-affiliation']
                            }
                            relatives={characterData.connections.relatives}
                        />
                    </section>
                </article>
            </Container>
        </>
    );
}
