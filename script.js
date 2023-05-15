//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//validate data
function validateForm(){
   

   clearMessage();
   let errorflag = false;


   if(nameInput.value.length < 1){
       errorNodes[0].innerText = "Name cannot be blank";
       nameInput.classList.add("error-border");
       errorflag = true;
    }
   if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "incorrect email address";
    email.classList.add("error-border");
    errorflag = true;

    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "please, enter message";
        message.classList.add("error-border"); 
        errorflag = true;
    }

    if(!errorflag){
        success.innerText = "Success";
    }
}

function clearMessage(){
    for(let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border"); 

}
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);


}