/* eslint-disable import/no-duplicates */
import * as app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  storageBucket: process.env.STORAGE_BUCKET,
};

app.initializeApp(config);

const database = app.database();
const auth = app.auth();
const emailAuthProvider = app.auth.EmailAuthProvider;

export { database, auth, emailAuthProvider };
