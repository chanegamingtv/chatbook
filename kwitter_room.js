
//ADD YOUR FIREBASE LINKS HERE 
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
document.getElementById("username").innerHTML="Welcome "+username
function addroom(){

roomname=document.getElementById("roomname").value
firebase.database().ref("/").child(roomname).update({
      purpose:"addroomname"
})
localStorage.setItem("roomname", roomname)
window.location="kwitter_page.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+" </div><hr>"
      document.getElementById("output").innerHTML+=row
       
      //End code
      });});}

getData();
function redirect(name){

localStorage.setItem("roomname", name)
window.location="kwitter_page.html"
}
function logout(){
localStorage.removeItem("nameofuser")
localStorage.removeItem("roomname")
window.location="index.html"




}