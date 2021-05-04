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

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("room_name");
    window.location = "login.html"
}

username = localStorage.getItem("name");
    room_name = localStorage.getItem("room_name");

function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name : username,
       message : message,
       like : 0     
      });
      document.getElementById("msg").innerHTML = "";
}