
function validatePassword(){
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm-password");
    if(password.value != confirm_password.value){
        confirm_password.setCustomValidity("Passwords do not match");
        console.log("Passwords do not match")
    } else {
        confirm_password.setCustomValidity("");
        alert("Account successfully created");
        console.log("Passwords match")
    }
}


function checkPassword(){
    let password = document.getElementById("password");
    let user = document.getElementById("user-email");

    if(password.value === "password" && user.value === "test@hello.com"){
        alert("Welcome user!")
    } else {
        alert("No user found")
    }
}