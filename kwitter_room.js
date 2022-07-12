
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8_zo4YAZYe0ap-faGmwWUoU6rJIN29Pk",
  authDomain: "kwitter-638a9.firebaseapp.com",
  databaseURL: "https://kwitter-638a9-default-rtdb.firebaseio.com",
  projectId: "kwitter-638a9",
  storageBucket: "kwitter-638a9.appspot.com",
  messagingSenderId: "273659912553",
  appId: "1:273659912553:web:5d96d16e5bd182f0449df8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
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
        window.location = "index.html";
    }