import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { db } from './data/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// async function readAllUsers() {
//   try {
//     const snapshot = await db.collection('users').get();

//     console.log(`Found ${snapshot.size}x user(s)`);
//     const docs = snapshot.docs;
//     docs.forEach((docSnapshot) => {
//       console.log(docSnapshot.id, docSnapshot.data());
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// readAllUsers();

// async function readOneUser(id) {
//   try {
//     const snapshot = await db.collection('users').doc(id).get();

//     if (!snapshot.exists) {
//       console.log(`No such user founds with id ${id}`);
//     } else {
//       console.log('success found the user!');
//       console.log(snapshot.id);
//       console.log(snapshot.data());
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// readOneUser('ZbOB0QdsWNbgnwQV3w8j');
