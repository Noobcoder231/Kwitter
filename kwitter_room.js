var firebaseConfig = {
      apiKey: "AIzaSyDbgrv_cA1xS0j7IYmxRvigezTY0qE7WSg",
      authDomain: "chat-app-14623.firebaseapp.com",
      databaseURL: "https://chat-app-14623-default-rtdb.firebaseio.com",
      projectId: "chat-app-14623",
      storageBucket: "chat-app-14623.appspot.com",
      messagingSenderId: "815018401778",
      appId: "1:815018401778:web:c1bcc5dcb3eae19104d56b",
      measurementId: "G-6M3KCKJHE1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names)
                  row = "<div class='room_name' id='+Room_names+' onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();



function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}