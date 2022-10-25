function Signup(){

    var name = document.getElementById('name');
    var password = document.getElementById('password');
   var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
   

    if(name.value.length == 0){
        alert('Please Enter email');

    }else if(password.value.length == 0){
        alert('Please Enter password');

    }else if(name.value.length == 0 && password.value.length == 0){
        alert('Please Enter email and password');

    }else if(password.value.length < 8){
        alert('Password length should be minimum 8 characters');

    }else if(!password.value.match(numbers)){
        alert('Password Should contain atleast 1 number');

    }else if(!password.value.match(upperCaseLetters)){
        alert('Password Should contain atleast 1 Uppercase letter');

    }
    
   
    else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('password', password.value);
      alert('Your account has been created');
        
    }
}

//checking
function login(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('password');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPassword');
    

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in,Go to Homepage');
        
       
    }
    else{
        
       
        alert('Error on Email or Password');
       
    }
}