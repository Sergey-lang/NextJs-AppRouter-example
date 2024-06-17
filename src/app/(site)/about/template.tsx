export default function AboutTemplate({children,}: Readonly<{ children: React.ReactNode }>) {
    console.log('[template]: I call every route visit!')
    return (
        <div className="border border-amber-500">
            {children}
        </div>
    );
}
