const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");
const passContainer = document.querySelector("#loginForm");

const submitButton = document.querySelector("#submitButton");

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
        passContainer.appendChild(errorMessage);
        return;
    }
    if(checkLength(pass)===true){
        pass.style.border = "1px solid green";
        passContainer.removeChild(errorMessage);
    } else{
        pass.style.border = "1px solid red";
        errorMessage.textContent = "Password is too short.";
        passContainer.appendChild(errorMessage);
    }
    
})

confirmPass.addEventListener("focusout", () => {
    if(checkLength(confirmPass)===false){
        confirmPass.style.border = "1px solid red";
        errorMessage.textContent = "Password is too short.";
        passContainer.appendChild(errorMessage);
        return;
    }
    if(checkMatching()===true){
        confirmPass.style.border = "1px solid green";
        pass.style.border = "1px solid green";
        passContainer.removeChild(errorMessage);
    } else{
        confirmPass.style.border = "1px solid red";
        errorMessage.textContent = "Passwords do not match.";
        passContainer.appendChild(errorMessage);
    }
})