import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.PUBLIC_KEY': JSON.stringify(env.PUBLIC_KEY),
            'process.env.PRIVATE_KEY': JSON.stringify(env.PRIVATE_KEY),
            'process.env.FIREBASE_APIKEY': JSON.stringify(env.FIREBASE_APIKEY),
            'process.env.FIREBASE_AUTODOMAIN': JSON.stringify(env.FIREBASE_AUTODOMAIN),
            'process.env.FIREBASE_PROJECTID': JSON.stringify(env.FIREBASE_PROJECTID),
            'process.env.FIREBASE_STORAGEBUCKET': JSON.stringify(env.FIREBASE_STORAGEBUCKET),
            'process.env.FIREBASE_MESSAGESENDERID': JSON.stringify(env.FIREBASE_MESSAGESENDERID),
            'process.env.FIREBASE_APPID': JSON.stringify(env.FIREBASE_APPID)
        },
    };
});