import React from 'react';

export default function AboutLayout({children, one, two}: Readonly<{
    children: React.ReactNode,
    one: React.ReactNode,
    two: React.ReactNode
}>) {
    return (
        <div className="border border-amber-500">
            {children}
            {one}
            {two}
        </div>
    );
}
