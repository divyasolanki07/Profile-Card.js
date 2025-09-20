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
var profileImage = "./images/profile.jpg";

// Set profile image
profileFrame.innerHTML = '<img src="./image/profile.jpg" alt="profile" style="width:50%; height:50%; z-index:1;">';

// Set other user info
nameDiv.textContent = userName;
professionDiv.textContent = userProfession;
emailDiv.textContent = userEmail;
contactDiv.textContent = userPhone;
