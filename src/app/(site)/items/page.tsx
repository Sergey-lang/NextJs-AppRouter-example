import { Metadata } from 'next';
import { getJokeRequest } from '@/api/jokeRequest';
import { getItemRequest } from '@/api/itemRequest';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// static
/*export const metadata: Metadata = {
  title: "Example of new meta",
  description: "Text for Example of new meta",
};*/

// dynamic
export async function generateMetadata(): Promise<Metadata> {
    // some calc
    return {
        title: 'Computed meta',
    }
}

export async function generateStaticParams() {
    const items = await getItemRequest();
    return items?.map((i) => i.name);
}

export default async function Item() {
    const items = await getItemRequest();

    if (!items) {
        notFound();
    }
    return (
        <main>
            {items?.map(({name}) => {
                return <div key={name}><Link href={`/items/${name}`}>{name}</Link></div>
            })}
        </main>
    );
}
