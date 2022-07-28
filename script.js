function myFunction(){
    var x =document.getElementById("pass");

    if(x.type === "password")
    {
       x.type = "text";
    }
    else{
        x.type = "password";
    }
}
function demo(){
    const password =document.getElementById("pass");
    const length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Ok");
        window.location.replace("mp/Index2.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}