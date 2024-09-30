const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");

const submitButton = document.querySelector("#submitButton");

// submitButton.addEventListener("click", () => {
//     verifyPassword();
// })

confirmPass.addEventListener("focusout", () => {
    verifyPassword();
})

function verifyPassword(){
    if(pass.value===confirmPass.value){
        pass.style.border = "1px solid green";
        confirmPass.style.border = "1px solid green";
    } else{
        pass.style.border = "1px solid red";
        confirmPass.style.border = "1px solid red";
    }
}