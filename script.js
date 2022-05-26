let firstnumber;
let secondnumber;
let result;
function add(){
    firstnumber=Number(document.getElementById("i1").value);
    console.log(firstnumber);
    secondnumber=Number(document.getElementById("i2").value);
    result=firstnumber+secondnumber;
    document.getElementById("result").innerHTML=result;
}
function subtract(){
    firstnumber=document.getElementById("i1").value;
    secondnumber=document.getElementById("i2").value;
    result=firstnumber-secondnumber;
    document.getElementById("result").innerHTML=result;
}
function multiply(){
    firstnumber=document.getElementById("i1").value;
    secondnumber=document.getElementById("i2").value;
    result=firstnumber*secondnumber;
    document.getElementById("result").innerHTML=result;
}
function divide(){
    firstnumber=document.getElementById("i1").value;
    secondnumber=document.getElementById("i2").value;
    result=firstnumber/secondnumber;
    document.getElementById("result").innerHTML=result;
}