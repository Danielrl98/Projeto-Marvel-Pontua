import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.PUBLIC_KEY': JSON.stringify(env.PUBLIC_KEY),
            'process.env.PRIVATE_KEY': JSON.stringify(env.PRIVATE_KEY),
            'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
        },
    };
});