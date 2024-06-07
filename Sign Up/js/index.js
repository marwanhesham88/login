

var signupName = document.querySelector("#signupName")
var signupEmail = document.querySelector("#signupEmail")
var signupPassword = document.querySelector("#signupPassword")
var signUp = document.querySelector("#signUp")
var exist = document.querySelector("#exist")

var user = []

if(localStorage.getItem("user") != null){
       user = JSON.parse(localStorage.getItem("user"))
}else{
    user = []
}

signUp.addEventListener("click",function(){
    let obj = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {
        exist.innerHTML = "All inputs is required"
        exist.classList.add("text-danger")
        exist.classList.remove("text-success")
    } else if(validate(signupEmail)==true) {
        if(check()==true){
         exist.innerHTML = "email is already exist"
         exist.classList.add("text-danger")
         exist.classList.remove("text-success")
         signupEmail.classList.remove("is-valid")  
        }else{
            user.push(obj);
            exist.innerHTML = "success"
            exist.classList.add("text-success")
            exist.classList.remove("text-danger")
            signupEmail.classList.remove("is-valid")
            localStorage.setItem('user', JSON.stringify(user));
        }
    
    }

    check()
})

function check(){
    for(var i =0 ; i<user.length ; i++){
        if(signupEmail.value == user[i].email ){
            return true
        }
         
    }
}

function validate(element){
    var text = element.value
    var regex = {
        signupEmail : /^[\w.]+@\w+\.[a-zA-Z]{3}$/,

    }
    if(regex[element.id].test(text)==true){
        signupEmail.classList.add("is-valid")
        signupEmail.classList.remove("is-invalid")
        return true
    }else{
        signupEmail.classList.add("is-invalid")
        signupEmail.classList.remove("is-valid")
        exist.innerHTML = "invalid data"
        exist.classList.add("text-danger")
        exist.classList.remove("text-success")
    }
}
