import { useEffect } from 'react';

export const useServiceWorker = () => {
    function startServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('[SW: registration success with scope]: ', registration)
                })
                .catch((error: string) => {
                    console.log('[SW: registration error]: ', error)
                })
        }
    }

    useEffect(() => {
        startServiceWorker();
    }, [startServiceWorker]);
}