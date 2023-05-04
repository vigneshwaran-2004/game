const user = "vicky";
const pass = "1234";
const form = document.getElementById('login-form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === user && password === pass){
        window.location.href ="https://www.fortnite.com/";
    }
    else{
        alert("input correct details");
    }
});