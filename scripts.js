const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#LastName");
const emailAddr = document.querySelector("#emailAddr");

const formContainer = document.querySelector("#loginForm");

const submitButton = document.querySelector("#submitButton");

const bottomContainer = document.querySelector(".bottom");

const errorMessage = document.createElement("div");
errorMessage.setAttribute("id", "errorMessage");

function checkLength(password){
    if(password.value.length<8){
        return false;
    } else{
        return true;
    }
}

function checkMatching(){
    if(pass.value===confirmPass.value){
        return true;
    } else{
        return false;
    }
}

pass.addEventListener("focusout", () => {
    if(confirmPass.value!=="" && checkMatching()===false){
        pass.style.border = "1px solid red";
        errorMessage.textContent = "Passwords do not match.";
        formContainer.appendChild(errorMessage);
        return;
    }
    if(checkLength(pass)===true){
        pass.style.border = "1px solid green";
        formContainer.removeChild(errorMessage);
    } else{
        pass.style.border = "1px solid red";
        errorMessage.textContent = "Password is too short.";
        formContainer.appendChild(errorMessage);
    }
    
})

confirmPass.addEventListener("focusout", () => {
    if(checkLength(confirmPass)===false){
        confirmPass.style.border = "1px solid red";
        errorMessage.textContent = "Password is too short.";
        formContainer.appendChild(errorMessage);
        return;
    }
    if(checkMatching()===true){
        confirmPass.style.border = "1px solid green";
        pass.style.border = "1px solid green";
        formContainer.removeChild(errorMessage);
    } else{
        confirmPass.style.border = "1px solid red";
        errorMessage.textContent = "Passwords do not match.";
        formContainer.appendChild(errorMessage);
    }
})

submitButton.addEventListener("click", () => {
    if((checkLength(pass)===true && checkMatching()===true) && firstName!=="" && lastName!=="" & emailAddr!==""){
        alert("You've been added to the mailing list!");
        formContainer.reset();
        formContainer.removeChild(errorMessage);
    } else{
        alert("Please fill out the required inputs.")
    }
    
})