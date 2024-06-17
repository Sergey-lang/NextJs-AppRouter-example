'use client'
export default function Error({error}: { error: Error }) {
    return (
        <>
            <div>Something went wrong [App error]</div>
            <div>{JSON.stringify(error)}</div>
        </>
    )
}