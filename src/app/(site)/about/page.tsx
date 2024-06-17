import { Metadata } from 'next';
import { getCatRequest } from '@/api/catRequest';

// static
/*export const metadata: Metadata = {
  title: "Example of new meta",
  description: "Text for Example of new meta",
};*/

// dynamic
export async function generateMetadata(): Promise<Metadata> {
    // some calc
    return {
        title: 'About us',
    }
}

export default async function About() {
    const data = await getCatRequest();
    return (
        <div>
            About Us (Main)
            {data?.fact}
        </div>
    );
}
