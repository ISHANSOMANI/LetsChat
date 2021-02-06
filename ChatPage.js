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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username")
  roomname = localStorage.getItem("roomname")

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          name: username,
          message: msg,
          likes: 0,
      });
    document.getElementById("msg").value = "";
  }

  function getData() 
  { firebase.database().ref("/"+roomname).on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
    firebase_message_id = childKey;
     message_data = childData;

// start code 
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
messages= message_data['message'];
like = message_data['likes']; 
namewithtag = "<h4>"+names+",/h4>";
messagewithtag = "<h4 class='message_h4'>"+ messages+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onlclick='updatelikes(this.id)'>";
spanwithtag = "<span class='glyphicon glyphicon-thumbs-up' id='likes'>Like:"+like+"</span></button><hr>";
row = namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML +=  row;
//End code 
} }); }); } 
getData();

function updatelikes(message_id){
console.log("clicked on like button"+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
document.getElementById("likes").innerHTML = like + likes
updated_likes = Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(roomname).child(message_id).update({
  likes: updated_likes
});
}

function LogOut(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location="index.html";
}