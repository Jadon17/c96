// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAv9oKYCPJ-I3gYVUlJaROteU51ivWkeU",
    authDomain: "lets-chat-e95f3.firebaseapp.com",
    databaseURL: "https://lets-chat-e95f3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-e95f3",
    storageBucket: "lets-chat-e95f3.appspot.com",
    messagingSenderId: "965696433634",
    appId: "1:965696433634:web:5c5f960725b5e242189dbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

function adduser(){
    username = document.getElementById("username").value ;
    localStorage.setItem("name", username);
    window.location = "kwitter_room .html"
  }  
