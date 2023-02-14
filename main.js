let form = document.querySelector("form");
form.addEventListener("submit", function(ar){
  ar.preventDefault();
   let user = document.querySelector(".inp").value;
   let user2 = document.querySelector(".inp1").value;
   let user3= document.querySelector(".inp2").value;
   let user4 = document.querySelector(".inp3").value;
   let user1 = document.querySelector("#user");
   let phone = document.querySelector("#phone");
   let pass = document.querySelector("#pass");
   let confirm= document.querySelector("#confirm");
   let empty=document.querySelector("#empty");

   if((user === "")){
     user1.innerHTML = "please enter your name";
     user1.style.color="red";
   }
   else if((user2 === "")||(isNaN(user2))){
    phone.innerHTML = "please enter Phone number";
    phone.style.color="red";
  }
  else if(user3 === ""){
    pass.innerHTML = "please enter password";
    pass.style.color="red";
  }
  else if(user4 === ""){
    confirm.innerHTML = "please enter confirm password";
    confirm.style.color="red";
  }
  else if(!(user3 === user4)){
    confirm.innerHTML = "please check your password";
    confirm.style.color="green";
  }
  else{
    empty.innerHTML = "LOGIN SUCCESSFUL....";
    empty.style.color="blue";
    user1.style.display="none";
    phone.style.display="none";
    pass.style.display="none";
    confirm.style.display="none";
  }
})
