//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCv6P1Eh1e1Fd-nwkOJo4HfBfOrfeC-ENM",
      authDomain: "kwitter-86bb7.firebaseapp.com",
      databaseURL: "https://kwitter-86bb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-86bb7",
      storageBucket: "kwitter-86bb7.appspot.com",
      messagingSenderId: "344609414356",
      appId: "1:344609414356:web:8e3a2a5311c3d59b116f41"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}