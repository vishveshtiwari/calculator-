const b1=document.getElementById("one");
const input=document.getElementById("input");
const b2=document.getElementById("two");
const b4=document.getElementById("three");
const b5=document.getElementById("four");
const b6=document.getElementById("five");
const b7=document.getElementById("six");
const b8=document.getElementById("seven");
const b9=document.getElementById("eight");
const b10=document.getElementById("nine");
const b11=document.getElementById("zero");
const b12=document.getElementById("point");
let result=0;
const b3=document.getElementById("equal");
const o1=document.getElementById("plus");
const o2=document.getElementById("minus");

const o3=document.getElementById("multi");

const o4=document.getElementById("divide");

const o5=document.getElementById("clear");



input.value="";


//yeh equal hone key bad ka game hai
b3.addEventListener("click",()=>{
    result=eval(input.value);
    input.value=result;
})
//yeh plus k liya
o1.addEventListener("click",()=>{
    input.value=input.value+"+";
});
//yeh minus key liya hai
o2.addEventListener("click",()=>{
    input.value=input.value+"-";
})
//yeh multiply key liya hai 
o3.addEventListener("click",()=>{
    input.value=input.value+"*";
})
//yeh wala clear dabayenge tho ho jayega game 
o5.addEventListener("click",()=>{
    input.value="";
})
//yeh wala divide key liya hai 
o4.addEventListener("click",()=>{
    input.value=input.value+"/"
})

b1.addEventListener("click",()=>{
    input.value=input.value+"1";
    
})





b2.addEventListener("click",()=>{
    input.value=input.value+"2";
   
})


b4.addEventListener("click",()=>{
    input.value=input.value+"3";
    
})


b5.addEventListener("click",()=>{
    input.value=input.value+"4";
   
})


b6.addEventListener("click",()=>{
    input.value=input.value+"5";
     
})


b7.addEventListener("click",()=>{
    input.value=input.value+"6";
    
})


b8.addEventListener("click",()=>{
    input.value=input.value+"7";
     
})

b9.addEventListener("click",()=>{
    input.value=input.value+"8";
   
})

b10.addEventListener("click",()=>{
    input.value=input.value+"9";
   
})

b11.addEventListener("click",()=>{
    input.value=input.value+"0";
})

b12.addEventListener("click",()=>{
    input.value=input.value+".";
})







