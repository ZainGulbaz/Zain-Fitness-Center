const register=()=> 
{

let temp=document.getElementById("message");
temp.style.display='block';
setInterval(hide,5000);
let userName= document.getElementById("formName").innerHTML;
console.log(userName);
}

function hide()
{

    let temp=document.getElementById("message");
    temp.style.display='none';
}