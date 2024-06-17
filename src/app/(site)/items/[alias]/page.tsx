import { Metadata } from 'next';
import { getJokeRequest } from '@/api/jokeRequest';
import { getItemRequest } from '@/api/itemRequest';
import { param } from 'ts-interface-checker';

// static
/*export const metadata: Metadata = {
  title: "Example of new meta",
  description: "Text for Example of new meta",
};*/

// dynamic
export async function generateMetadata({params}: { params: { alias: string } }): Promise<Metadata> {
    const items = await getItemRequest();
    console.log(params.alias);
    const item = items?.find((i) => i.name === decodeURIComponent(params.alias))
    // some calc
    return {
        title: item?.name || 'no name',
    }
}

export default async function Item({params}: { params: { alias: string } }) {
    const items = await getItemRequest();
    const item = items?.find((i) => i.name === decodeURIComponent(params.alias))
    console.log('item', item)
    return (
        <main>
            <div>Item page</div>
            <p>
                {item?.name}
            </p>
        </main>
    );
}
