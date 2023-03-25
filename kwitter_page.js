var firebaseConfig = {
    apiKey: "AIzaSyAKQ2onF1deDIY4Vv5KextNax7mgw_WaC8",
    authDomain: "kwitter-cc029.firebaseapp.com",
    databaseURL: "https://kwitter-cc029-default-rtdb.firebaseio.com",
    projectId: "kwitter-cc029",
    storageBucket: "kwitter-cc029.appspot.com",
    messagingSenderId: "146129215400",
    appId: "1:146129215400:web:f3058300df34fb61df879d",
    measurementId: "G-NJBYRBZNWZ"
  };
  firebase.initializeApp(firebaseConfig)
  username=localStorage.getItem("nameofuser")
  roomname=localStorage.getItem("roomname")
  function send(){
message=document.getElementById("message").value
firebase.database().ref(roomname).push({
    name:username,
    message:message,
    like:0
})
document.getElementById("message").value=""

}