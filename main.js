function ValidateEmail() {
    var validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputText = document.getElementById("email");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");
    if(inputText.value.match(validMail)){
        success.style.display="block";
        inputText.focus();
    }else{
        danger.style.display="block";
        inputText.focus();
    }

    setTimeout(()=>{
        danger.style.display="none";
        success.style.display="none";
    },3000)
}