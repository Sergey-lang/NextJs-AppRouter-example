export async function getCatRequest(): Promise<{fact: string} | null> {
    await new Promise((res) => setTimeout(() => res(''), 3000))
    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 10}})
    if (!res.ok) {
        return null;
    }
    const result = await res.json();
    console.log(result)

    return result;
}