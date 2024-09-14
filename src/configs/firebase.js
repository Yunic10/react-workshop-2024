import { initializeApp, getApps } from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA3Uixx4dnffYOxkoTGxWTRi_tL-vbeL2k",
  authDomain: "workshop-unsoed.firebaseapp.com",
  projectId: "workshop-unsoed",
};

function getFirebaseApp() {
  const apps = getApps();

  if (apps.length > 0) {
    return apps[0];
  }

  return initializeApp(FIREBASE_CONFIG);
}

export const firebaseApp = getFirebaseApp();
