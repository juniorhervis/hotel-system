// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';
// import {resolve} from 'path';
// import laravel from 'laravel-vite-plugin';
//
// export default defineConfig({
//     build: {
//         rollupOptions: {}
//     },
//     plugins: [
//         react(),
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/App.jsx'],
//             refresh: true,
//         }),
//     ],
//     server: {
//         host: '127.0.0.1',
//     },
// });
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/App.jsx'],
            refresh: true,
        }),
    ],
});
