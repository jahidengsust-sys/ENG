# English Monk — Android APK Starter

A minimal Vite + React + Capacitor project to turn your web app into an APK.

## Commands
```bash
npm install
npm run build
npx cap sync
npx cap open android  # build APK from Android Studio (Build > Build APKs)
```

The debug APK will be at:
`android/app/build/outputs/apk/debug/app-debug.apk`

## Notes
- Sounds & haptics are built-in (Web Audio + Vibration API).
- For a URL-based wrapper instead of bundling files, set `server.url` in `capacitor.config.ts`.
- To enable push notifications later, add Firebase Cloud Messaging in Android.