
// when two buttons are using for add or remove 



// var istatus = document.querySelector("h5");

// var addfriend = document.querySelector("#add");
// var removefriend = document.querySelector("#remove");

// addfriend.addEventListener("click", function(){
//     istatus.innerHTML = "friends";
//     istatus.style.color = "green";
// });

// removefriend.addEventListener("click", function(){
//     istatus.innerHTML= "stranger";
//     istatus.style.color ="red";
// });



// only one button is used for add and remove 
// if else loop 

var istatus = document.querySelector("h5");
var btn =document.querySelector("#add");
var check = 0;

btn.addEventListener("click",function(){
    if(check ==0){
        istatus.innerHTML="friends";
        istatus.style.color = "green";
        btn.innerHTML = "remove friend";
        check = 1;
    }else{
        istatus.innerHTML="stanger";
        istatus.style.color = "red";
        btn.innerHTML= "add friend";
        check =0;
    }
});
