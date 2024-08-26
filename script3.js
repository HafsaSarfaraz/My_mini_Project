// let btn1= document.createElement("button")
// btn1.innerHTML="<i>Home</i>";

// let div1= document.querySelector("#image");
// div1.prepend(btn1);

let btna= document.getElementById("btna");
let btnb= document.getElementById("btnb");
let btnc= document.getElementById("btnc");
let btnd= document.getElementById("btnd");

let diva= document.getElementById("diva");
let divb= document.getElementById("divb");
let divc= document.getElementById("divc");
let divd= document.getElementById("divd");

btna.addEventListener('click' , ()=>{
    diva.style.display='block';
    divb.style.display= 'none';
    divc.style.display= 'none';
    divd.style.display= 'none';
});

btnb.addEventListener('click' , ()=>{
    diva.style.display='none';
    divb.style.display= 'block';
    divc.style.display= 'none';
    divd.style.display= 'none';
});

btnc.addEventListener('click' , ()=>{
    diva.style.display='none';
    divb.style.display= 'none';
    divc.style.display= 'block';
    divd.style.display= 'none';
});

btnd.addEventListener('click' , ()=>{
    diva.style.display='none';
    divb.style.display= 'none';
    divc.style.display= 'none';
    divd.style.display= 'block';
});