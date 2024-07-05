'use server';

export const getCharacters = async (request) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

    const response = await fetch(`${apiUrl}${apiKey}/search/${request}`);
    const data = await response.json();

    return data;
};
/*
export const getSpecificCharacter = async (request) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

    const response = await fetch(`${apiUrl}${apiKey}/${request}`);
    const data = await response.json();

    return data;
};
*/
