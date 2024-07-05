import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from './components/ClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'SuperHeroes Info',
    description: 'SuperHeroes Info Site',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientProvider>{children}</ClientProvider>
            </body>
        </html>
    );
}
