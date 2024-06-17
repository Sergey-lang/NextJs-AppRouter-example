export default function AboutLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="border border-amber-500">
            {children}
        </div>
    );
}
