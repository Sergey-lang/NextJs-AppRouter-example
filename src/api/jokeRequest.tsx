export async function getJokeRequest(): Promise<{ setup: string, punchline: string } | null> {
    await new Promise((res) => setTimeout(() => res(''), 3000))
    const res = await fetch('https://234official-joke-api.appspot.com/random_joke', {next: {revalidate: 10}})
    if (!res.ok) {
        return null;
    }
    const result = await res.json();
    console.log(result)

    return result;
}