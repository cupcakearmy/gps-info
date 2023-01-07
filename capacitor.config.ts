import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.nicco.app.gps',
  appName: 'GPS Info',
  webDir: 'build',
  backgroundColor: '#180b2e',
  bundledWebRuntime: false,
  // server: {
  //   url: 'http://127.0.0.1:5173',
  //   cleartext: true,
  // },
  plugins: {
    SplashScreen: {
      launchShowDuration: 100,
    },
  },
}

export default config
