// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDo1iVcKHBYBvmuj3gK962PPxfvV8npa7w",
      authDomain: "twitter-f8736.firebaseapp.com",
      databaseURL: "https://twitter-f8736-default-rtdb.firebaseio.com",
      projectId: "twitter-f8736",
      storageBucket: "twitter-f8736.appspot.com",
      messagingSenderId: "971050680900",
      appId: "1:971050680900:web:2aab9d1f9cbd836b967211"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
