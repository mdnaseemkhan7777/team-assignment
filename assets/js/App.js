SignIn =()=>{
    var SignInEmail = document.getElementById("SignInEmail").value;
    var SignInPassword = document.getElementById("SignInPassword").value;
    console.log(SignInEmail, SignInPassword);
    window.location.href="./CreateTeam.html";
}
SignUp =()=>{
    var FullName = document.getElementById("FullName").value;
    var SignUpEmail = document.getElementById("SignUpEmail").value;
    var SignUpPassword = document.getElementById("SignUpPassword").value;
    console.log(FullName,SignUpEmail, SignUpPassword);
    window.location.href="./CreateTeam.html";
}
CreateTeam=()=>{
    alert("create")
}
Cancel=()=>{
    alert("Cancel");
}