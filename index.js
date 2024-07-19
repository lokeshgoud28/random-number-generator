const btn=document.getElementById("btn");
const r=document.getElementById("r");
const min=1;
const max=6;
let random;
btn.onclick=function(){
    random=Math.floor(Math.random() * max)+min;
    r.textContent=random;
}