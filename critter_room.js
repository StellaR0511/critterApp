// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYqSf2W15mXc0pLTCoSUCmdWk1jMQHxKs",
    authDomain: "crittercodeproject.firebaseapp.com",
    projectId: "crittercodeproject",
    storageBucket: "crittercodeproject.appspot.com",
    messagingSenderId: "965654398887",
    appId: "1:965654398887:web:59da6b52489770530e5882"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name;

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}
  
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room name: "+Room_names);
          row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;

    });});}
getData();

function addRoom(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "critter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}