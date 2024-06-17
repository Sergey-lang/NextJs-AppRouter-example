export async function getItemRequest(): Promise<{ name: string, alpha_two_code: string }[] | null> {
    await new Promise((res) => setTimeout(() => res(''), 3000))
    const res = await fetch('http://universities.hipolabs.com/search?country=United+States', {next: {revalidate: 10}})
    if (!res.ok) {
        return null;
    }
    const result = await res.json();
    return result;
}