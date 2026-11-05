import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rtconnect',
  appName: 'RT connect',
  webDir: 'dist',
  server: {
    url: 'https://rtconnect-chi.vercel.app/',
    cleartext: true
  }
};

export default config;

