'use client'

import { useServiceWorker } from '@/utils/useServiceWorker';

export const SW = () => {
    useServiceWorker();

    return <h3>ServiceWorker Component</h3>
}