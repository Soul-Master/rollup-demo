import { defineConfig } from 'rollup';

export default defineConfig({
    input: [
        'a.js',
        'b.js'
    ],
    output: {
        format: 'es', 
        dir: 'build'
    },
});