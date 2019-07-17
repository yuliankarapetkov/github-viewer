const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://githubviewer-mvp.firebaseio.com' // TODO: remove magic strings
});

const firestore = admin.firestore();

exports.onCreateUser = functions.auth.user()
    .onCreate(user => {
        const { uid: id, email } = user;
        return firestore.collection('users').doc(id).set({ id, email, favorites: [] });
    });
