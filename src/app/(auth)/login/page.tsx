import Image from 'next/image';
import { Metadata } from 'next';

// static
/*export const metadata: Metadata = {
  title: "Example of new meta",
  description: "Text for Example of new meta",
};*/

// dynamic
export async function generateMetadata(): Promise<Metadata> {
    // some calc
    return {
        title: 'Login',
    }
}

export default function Login() {
    return (
        <div>
            Login
        </div>
    );
}
