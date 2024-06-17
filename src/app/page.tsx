import { Metadata } from 'next';
import { getJokeRequest } from '@/api/jokeRequest';

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

export default async function Home() {
    const joke = await getJokeRequest();
    return (
        <main>
            <div>Main page</div>
            <p>
                {joke?.setup}
            </p>
            <p>
                {joke?.punchline}
            </p>
        </main>
    );
}
