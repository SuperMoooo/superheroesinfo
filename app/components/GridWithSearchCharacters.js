import CharacterSearchCard from './CharacterSearchCard';

export default function GridWithSearchCharacters({ loading, data }) {
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <section className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full h-full">
            {data ? (
                data.map((character) => (
                    <CharacterSearchCard
                        key={character.id}
                        name={character.name}
                        img={character.image.url}
                        fullName={character.biography['full-name']}
                        publisher={character.biography['publisher']}
                        data={character}
                    />
                ))
            ) : (
                <span className="text-center text-xl absolute top-96 left-1/2 -translate-x-1/2">
                    No characters found...maybe not in the api
                </span>
            )}
        </section>
    );
}
