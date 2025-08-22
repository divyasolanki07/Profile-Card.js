// var propfileFrame = document.querySelector('.img-frame');
// var userName = "Solanki Divya";
// var userProfession = "Web Developer";
// var userEmail =  "divusolanki07@gmail.com";
// var userPhone = "+91 75674 40153";

// var profileImage = "images/profile.jpg";
// var name = "Solanki Divya";
// var profession = "Web Developer";
// var email = "divusolanki07@gmail.com";
// var phone = "+91 75674 40153";

// profileFrame.innerHTML = '<img src="' + profileImage + '" alt="Profile Image">';
// userName.textContent = name;
// propfileFrame.innerHTML = '<img src="./images/profile.jpg"' + profileImage + '" alt="Profile Image"> style="width: 50px; height: 90px;">';

// profileFrame.innerHTML = '<img src="' + profileImage + '" alt="Profile Image" style="width:50px; height:90px;">';


// var profileFrame = document.querySelector('.img-frame');

// var userName = "Solanki Divya";
// var userProfession = "Web Developer";
// var userEmail =  "divusolanki07@gmail.com";
// var userPhone = "+91 75674 40153";

// var profileImage = "./images/profile.jpg";
// var name = "Solanki Divya";
// var profession = "Web Developer";
// var email = "divusolanki07@gmail.com";
// var phone = "+91 75674 40153";


// profileFrame.innerHTML = '<img src="' + profileImage + '" alt="Profile Image" style="width:50px; height:90px;">';



// Select elements
var profileFrame = document.querySelector('.img-frame');
var nameDiv = document.querySelector('.name');
var professionDiv = document.querySelector('.profession');
var emailDiv = document.querySelector('.email');
var contactDiv = document.querySelector('.contact');

// User data
var userName = "Solanki Divya";
var userProfession = "Web Developer";
var userEmail = "divusolanki07@gmail.com";
var userPhone = "+91 75674 40153";
var profileImage = "./images/profile.jpg"; // Make sure path is correct

// Set profile image
profileFrame.innerHTML = '<img src="./image/profile.jpg" alt="profile" style="width:250px; height:150px; z-index:1;">';

// Set other user info
nameDiv.textContent = userName;
professionDiv.textContent = userProfession;
emailDiv.textContent = userEmail;
contactDiv.textContent = userPhone;
