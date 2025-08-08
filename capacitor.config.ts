import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.englishmonk.app',
  appName: 'English Monk',
  webDir: 'dist',
  server: { androidScheme: 'https' }
};

export default config;