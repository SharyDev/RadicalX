import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDP7Db4lDfjjflc1JGbWpz7yMbe5fMtbnQ',
  authDomain: 'sq-10-2d02b.firebaseapp.com',
  projectId: 'sq-10-2d02b',
  storageBucket: 'sq-10-2d02b.appspot.com',
  messagingSenderId: '255063452012',
  appId: '1:255063452012:web:3ab7213bfb38fb14d0eb49',
  measurementId: 'G-HE2QCQBLT1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const fireDB = getFirestore(app)

export { fireDB, storage }
