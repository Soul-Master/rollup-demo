import path from 'node:path';
import { defineConfig } from 'rollup';

const component1Path = path.resolve('./component1') + '/';

export default defineConfig({
    input: 'main.js',
    output: {
        format: 'es', 
        dir: 'build',
        manualChunks(id) {
            if (id.startsWith(component1Path)) {
                return 'component1';
            }
        }
    },
});