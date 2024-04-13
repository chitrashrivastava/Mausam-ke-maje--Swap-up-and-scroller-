// For swapping  up

var h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

// page-1 Scroller

var swap1=0;
var arrowRight1 = document.querySelector("h3");
var arrowLeft1 = document.querySelector("h2");
var page1 = document.querySelector(".page1");
 arrowRight1.addEventListener("click",function(){
     swap1 = swap1+100;
     page1.scrollTo(swap1,0)
 })
 arrowLeft1.addEventListener("click",function(){
    swap1 = swap1-100;
    page1.scrollTo(swap1,0)
})

// page-2 Scroller


 var swap2 = 0;
 var arrowRight2 = document.querySelector("h5");
 var arrowLeft2 = document.querySelector("h4");
 var page2 = document.querySelector(".page2");
 arrowRight2.addEventListener("click",function(){
     swap2 = swap2+100;
     page2.scrollTo(swap2,0)
 })
 arrowLeft2.addEventListener("click",function(){
    swap2 = swap2-100;
    page2.scrollTo(swap2,0)
})


// page-3 Scroller


var swap3 = 0;
var arrowRight3 = document.querySelector(".page3>h5");
var arrowLeft3 = document.querySelector(".page3>h4");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");
 arrowRight3.addEventListener("click",function(){
     swap3 = swap3+100;
     page3.scrollTo(swap3,0)
 })
 arrowLeft3.addEventListener("click",function(){
    swap3 = swap3-100;
    page3.scrollTo(swap3,0)
})