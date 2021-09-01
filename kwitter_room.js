
const firebaseConfig = {
      apiKey: "AIzaSyBvMOlSaXwKpy6BEc6T97clEOmHOZavBKs",
      authDomain: "kwitter-880ed.firebaseapp.com",
      databaseURL: "https://kwitter-880ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-880ed",
      storageBucket: "kwitter-880ed.appspot.com",
      messagingSenderId: "463158699127",
      appId: "1:463158699127:web:a7edb5d1bdded0e8811272"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose :  "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

