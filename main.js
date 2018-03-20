 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtM5fcaWk9uqAtQFs3A3ccu2ne_VBArkk",
    authDomain: "child-portal.firebaseapp.com",
    databaseURL: "https://child-portal.firebaseio.com",
    projectId: "child-portal",
    storageBucket: "child-portal.appspot.com",
    messagingSenderId: "7392872389"
  };
  firebase.initializeApp(config);

//the firebase code should be pasted here

var messageRef=firebase.database.ref('message');
document.getElementById('// yash Write the id of the form which will be used by this js').addEventListener('submit',submitForm);


function submitForm(e){
  e.preventDefault();
  
  
  var name = getInputVal('name');
  var age = getInputVal('age');
  var dob = getInputVal('dob');
  var gender = getInputVal('gender');
  var doa = getInputVal('doa');
  
  savemessage(name,age,dob,gender,doa);
  
} 

//function to get values from form

function getInputVal(id) {
  return document.getElementById(id).value;
}

function savemessage(name,age,dob,gender,doa){
  
  var newMessageRef = messagesRef.push();
  
  newMessageRef.set({
    name:name,
    age:age,
    dob:dob,
    gender:gender,
    doa:doa;
  });
}