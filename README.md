 
 
# Task : Profile when click his personalle picture git his profile 
# Task : Can users talk with each eather inside this app i did it 

<img src="singup.PNG"/> 
 <img src ="adduser.PNG"/>
 
 <img src ="tiktokttcloen.PNG"/>
# MERN TikTok Clone 
# @founder nahdi ghaith

This is a full-stack TikTok clone built using the MERN stack (MongoDB, Express, React, Node.js).



## Features
- User authentication
- Video uploading and playback
- Commenting and likes
- User profiles
- Responsive design
- Handel DataBase
-Deal with fire base
-deal with logique

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TUNISIA-user/MERN-TIK-TOK-.git
   cd MERN-TIK-TOK-

### Step 3: Add, Commit, and Push the `README.md`
Once you’ve created and saved your `README.md` file:

1. **Add the file to staging:**
   ```bash
   git add README.md
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git


   ##litle of sql

   -- Create the comments table

<h1>expmle of simple data base</h1>
<img src="sql.PNG"/>

 

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the video is in view and not playing, play it
          if (!playing) {
            videoElement.play();
            setPlaying(true);
          }
        } else {
          // If the video is out of view and playing, pause it
          if (playing) {
            videoElement.pause();
            setPlaying(false);
          }
        }
      },
      { threshold: 0.5 } // Adjust this value based on how much of the video should be in view to trigger the observer
    );

    observer.observe(videoElement);

    // Clean up the observer on component unmount
    return () => {
      observer.unobserve(videoElement);
    };
  }, [playing]);
 # this for when you scroll this video Pause()

  
# https://www.youtube.com/watch?app=desktop&v=2IbRtjez6ag 

[![Watch the video](https://img.youtube.com/vi/2IbRtjez6ag/maxresdefault.jpg)](https://www.youtube.com/watch?v=2IbRtjez6ag)

# doc for firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDxtu77aEU0FLm58CcNPeSxX1AK3aU5zxM",
    authDomain: "reactchat-35c09.firebaseapp.com",
    projectId: "reactchat-35c09",
    storageBucket: "reactchat-35c09.appspot.com",
    messagingSenderId: "382321958499",
    appId: "1:382321958499:web:9afa21680adffca47b2256",
    measurementId: "G-SBNMCLF2TP"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass `app` to `getAuth`
export const db = getFirestore(app); // Pass `app` to `getFirestore`
export const storage = getStorage(app); // Pass `app` to `getStorage`



rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Allow read and write access to authenticated users on their own documents
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow read and write access to authenticated users on their chat documents
    match /userschats/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow reads on other public collections (e.g., for messages that might be public)
    match /public/{document=**} {
      allow read: if request.auth != null;
    }
  }
}

#Firebase Auth
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // or use a specific service account key
});

// Verify ID token
const verifyToken = async (idToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    throw new Error('Invalid token');
  }
};


#FirebaseStore

const admin = require('firebase-admin');
const db = admin.firestore();

// Add a document
const addUser = async (userId, data) => {
  try {
    await db.collection('users').doc(userId).set(data);
  } catch (error) {
    console.error('Error adding document:', error);
  }
};





⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠒⠋⠉⠭⠓⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⡋⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⠛⠋⠁⠀⠀⠀⠁⠹⠝⠛⠢⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢨⠛⢦⣄⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠲⣌⠙⢦⣰⠿⠋⢀⣀⡠⠴⠶⠒⠚⣫⣽⣯⣉⡛⠒⠲⠶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣶⢻⣶⠚⠋⠁⠀⢀⣠⢤⣾⡿⠟⠛⠻⢿⣤⣀⣀⠀⠀⠉⠓⠢⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣾⣧⠀⠚⠉⠉⠁⡿⠋⠀⠀⠀⠀⠈⠀⠀⠉⠛⠲⣤⢀⠀⢀⣽⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠒⠲⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠽⡇⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⠿⠻⢿⣿⣗⣆⠀⠀⠀⠀⠀⠀
⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠀⠀⠀⢀⣠⣤⣂⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⠈⠳⡄⠀⠀⠀⠀
⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⢄⡀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⢠⣿⠟⠉⠀⠈⠓⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠀⠀⠙⣆⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢦⡀⠙⢦⡀⠀⠀⠀⠀⣼⠁⠀⠀⡾⠁⠀⣠⣀⡀⠀⠈⣧⠀⠀⠀⠀⣠⡴⠖⠦⣤⡀⠀⠀⠀⠀⠀⠘⣧⠀⠀
⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠙⢦⡀⢀⡴⠃⠀⠀⢰⠃⢠⡞⠙⣿⣿⡆⠀⠸⡆⠀⠀⣼⠃⣅⣀⣀⠀⠉⢳⡄⠀⠀⠀⠀⠸⣆⠀
⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠶⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⢻⡉⠐⠓⠒⠤⢼⣀⢸⣿⣶⣿⣿⣿⠀⢀⡇⠀⠀⡇⣾⠛⢻⣿⣧⠀⠀⢹⡀⠀⠀⠀⠀⠹⡀
⠘⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠣⠘⡇⠀⠀⠀⠀⠀⠈⠛⢿⣿⣬⣿⠃⠀⣼⠁⠀⠀⣷⣿⣷⣿⣿⣿⠀⠀⠀⣷⠀⠀⠀⠀⠀⡇
⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⣠⠤⣤⣀⡀⠀⠀⠀⠻⡉⠁⢀⡴⠁⠀⠀⠀⠘⣿⣿⣇⣿⡟⠀⠀⢂⡟⠀⠀⠀⠀⠀⠁
⠀⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⡈⠻⣦⠀⠀⠀⠀⠀⠀⣠⠟⠁⠀⠀⠀⢻⡙⠂⠀⠀⠀⢹⠔⠋⠀⠀⠀⠀⠀⠀⠙⢎⡉⠁⢀⣠⠤⠾⠦⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠘⢦⡶⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢆⠈⢧⣀⣀⣠⡤⠞⠁⠀⠀⠀⠀⠀⠀⢻⣄⠄⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡀⢸⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⣀⣤⣤⣀⠀⠀⠀⠀⠀⡀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣳⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠽⣿⣆⠈⠙⠲⠦⣄⣀⣀⣀⠀⠀⠀⠀⢀⣀⣈⡵⠞⠁⠈⠁⠀⠀⠀⢀⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠓⠲⠤⠤⠤⠴⠖⠺⣏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢿⣿⣷⣄⠀⠀⠀⠀⠀⠉⠉⠉⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⡟⠻⢿⣷⣶⣤⣄⣀⣀⣤⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠻⠿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡽⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣄⣘⣦⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⠿⠿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠦⠖⠒⠀⠀⠀⠀⠀⠀⠀⣠⡴⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⠤⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠷⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀ 
