// Initialize Firebase (ADD YOUR OWN DATA)

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
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var age = getInputVal('age');
  var dob = getInputVal('dob');
  var gender = getInputVal('gender');
  var appoint = getInputVal('appoint');

  // Save message
  saveMessage(name, age, dob, gender, appoint);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, age, dob, gender, appoint){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    age:age,
    dob:dob,
    gender:gender,
    appoint:appoint
  });
}