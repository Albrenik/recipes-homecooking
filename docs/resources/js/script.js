
let slides=document.querySelector('.slider-items').children;
let nextSlide=document.querySelector(".right-slide");
let prevSlide=document.querySelector(".left-slide");


let slides1=document.querySelector('.slider-items1').children;
let nextSlide1=document.querySelector(".right-slide1");
let prevSlide1=document.querySelector(".left-slide1");


let totalSlides=slides.length;
let totalSlides1=slides1.length;
let index=0, i;
let index1=0,i1;


nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}
/*--*/
nextSlide1.onclick=function () {
    next("next1");
}
prevSlide1.onclick=function () {
    next("prev1");
}



function next(direction){

    if(direction==="next"){
        index++;
        if(index===totalSlides){
            index=0;
        }
    }
    else if (direction==="next1"){
        index1++;
        if (index1===totalSlides1){
            index1=0;
        }
    }
    else if (direction==="prev") {
        if(index===0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }
    else if (direction==="prev1") {
            if(index1===0){
                index1=totalSlides1-1;
            }
            else{
                index1--;
            }
        }

    for(i=0;i<slides.length ;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
   /*--*/
    for(i1=0;i1<slides1.length;i1++){
        slides1[i1].classList.remove("active");
    }
    slides1[index1].classList.add("active");

}
