
var firebaseConfig = {
      apiKey: "AIzaSyDNf1OzUINRd9AGXFtagcLeA7-GHkpNxpE",
      authDomain: "kwitter-7cb25.firebaseapp.com",
      databaseURL: "https://kwitter-7cb25-default-rtdb.firebaseio.com",
      projectId: "kwitter-7cb25",
      storageBucket: "kwitter-7cb25.appspot.com",
      messagingSenderId: "926893447350",
      appId: "1:926893447350:web:191733f91325055ed72e17"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - + Room_names");
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter.html";

}
function login() {
      localStorage.addItem("user_name");

}