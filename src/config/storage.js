import * as admin from 'firebase-admin';
import * as serviceAccount from './service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'hell-grade.appspot.com',
});

const bucket = admin.storage().bucket();

export default bucket;

// 'bucket' is an object defined in the @google-cloud/storage library.
// See https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage/latest/storage/bucket
// for more details.
