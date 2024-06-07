

var signinEmail = document.querySelector("#signinEmail")
var signinPassword = document.querySelector("#signinPassword")
var login = document.querySelector("#login")
var incorrect = document.querySelector("#incorrect")





var user = JSON.parse(localStorage.getItem('user'))


login.addEventListener('click', function () {
    if (signinEmail.value == '' || signinPassword.value == '') {
       incorrect.innerHTML = "All inputs is required"
    } else {
        checkUser();
    }
})


function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (signinEmail.value == user[i].email && signinPassword.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('userName', y);
            location.href = '../home/home.html';
           
        }else{
             incorrect.innerHTML = "incorrect email or password"
        }
    }
}