const title = document.getElementById('title');
const nameField = documnet.getElementById('nameField');
const signinbutton =  documnet.getElementById('signinbutton');
const signupbutton =  documnet.getElementById('signupbutton');

signupbutton.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
}
signupbutton.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}