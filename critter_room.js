firebaseConfig = {
    apiKey: "AIzaSyD8xYhLzPnOAx6IUkYDW43mjqZUgY03i7k",
    authDomain: "crittercodefixed.firebaseapp.com",
    databaseURL: "https://crittercodefixed-default-rtdb.firebaseio.com",
    projectId: "crittercodefixed",
    storageBucket: "crittercodefixed.appspot.com",
    messagingSenderId: "65265656456",
    appId: "1:65265656456:web:3c4d6fe7d7f8e356f7f53d"
  };
  
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome to Critter, "+user_name+"!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "critter_page.html";
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
function redirectToRoomName(name){
    console.log(room_name);
    localStorage.setItem("room_name",room_name);
    window.location = "critter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}