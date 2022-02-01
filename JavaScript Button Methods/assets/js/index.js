
var num1 = document.querySelector(".number1");
var num2 = document.querySelector(".number2");
let result = document.querySelector(".result");

 document.querySelector(".plus").onclick = function(){
    result.value = parseInt(num1.value)  +  parseInt(num2.value); 
    num1.value = "";
    num2.value = "";
 };
 document.querySelector(".minus").onclick = function(){
    result.value = parseInt(num1.value)  -  parseInt(num2.value); 
    num1.value = "";
    num2.value = "";
 };
 document.querySelector(".multiply").onclick = function(){
    result.value = parseInt(num1.value)  *  parseInt(num2.value); 
    num1.value = "";
    num2.value = "";
 };
 document.querySelector(".divide").onclick = function(){
    result.value = parseInt(num1.value)  /  parseInt(num2.value); 
    num1.value = "";
    num2.value = "";
 };