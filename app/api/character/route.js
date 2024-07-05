import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET(request) {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');

    if (!search) {
        return NextResponse.json(
            { error: 'Search parameter is missing' },
            { status: 400 }
        );
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

    try {
        const result = await fetch(`${apiUrl}${apiKey}/search/${search}`);
        const data = await result.json();
        return NextResponse.json({ result: data });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error fetching data' },
            { status: 500 }
        );
    }
}
