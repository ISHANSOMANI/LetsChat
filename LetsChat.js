
var firebaseConfig = {
    apiKey: "AIzaSyCvkIwu_Cnm332nnCSqXZHmbbO6SWtTmt0",
    authDomain: "letschat-7e8cc.firebaseapp.com",
    databaseURL: "https://letschat-7e8cc-default-rtdb.firebaseio.com",
    projectId: "letschat-7e8cc",
    storageBucket: "letschat-7e8cc.appspot.com",
    messagingSenderId: "527283352986",
    appId: "1:527283352986:web:9863078aa75f4860b23623",
    measurementId: "G-LW34CKV526"
  };
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");

  document.getElementById("username").innerHTML = "Welcome " + username + "!";

  function addRoom(){
    roomname = document.getElementById("roomname").value ;

    firebase.database().ref("/").child(roomname).update({
          purpose : "adding room name"

    });
    localStorage.setItem("roomname",roomname);

    window.location  = "ChatPage.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    console.log("Room_names -" + Room_names);
    row = "<div class='roomname' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ roomname + "</div> <hr>"
document.getElementById("output").innerHTML+= row;
    

    });});}


getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location = "ChatPage.html";
}

function LogOut(){
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location="index.html";
}
