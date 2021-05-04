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

  username = localStorage.getItem("name");
    document.getElementById("welcome").innerHTML = "Welcome " + username + " !";
    
    function addroom(){
          Room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update(
                {
                      purpose : "adding a room" 
                }
          );
      localStorage.setItem( "room_name" ,Room_name);
      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log(Room_names);
     row = "<div class = 'room_name btn btn-info' id = "+Room_names + " onclick = 'Redirect_to_Room_Name(this.id)' style = 'font-size : 30px;' >#"+ Room_names + "</div> <hr>"
     document.getElementById("output").innerHTML +=row;
     //End code
     });});}
getData();
function Redirect_to_Room_Name(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
     }

function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location = "login.html"
}