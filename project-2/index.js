var con = document.querySelector("#card");
var love = document.querySelector("i");

con.addEventListener("dblclick", function(){
 love.style.transform = '  translate(-50% , -50%) scale(1)';
 love.style.color ="red";
 love.style.opacity = 1;

 setTimeout(function(){
    love.style.opacity = 0;
 },1000);

 setTimeout(function(){
    love.style.transform = '  translate(-50% , -50%) scale(0)';
 },2000)

});

