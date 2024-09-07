

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
            location.href = 'home/home.html';
           
        }else{
             incorrect.innerHTML = "incorrect email or password"
        }
    }
}



























// oop example:-
// function User(name,gender,age){
// this.name= name;
// this.gender= gender;
// this.age= age;
// }

// function Student(name,gender,age,level,grad){
//     User.call(this,name,gender,age)
//     this.level=level;
//     this.grad=grad;
// }

// let ahmed = new Student("ahmed","male",29,4,"A")
// console.log(ahmed)






