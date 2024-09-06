// let slides = document.querySelector('.slider').children;
// console.log(slides);

// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')
// let index = 0

// prev.addEventListener('click', function () {
//     console.log('you clicked');
//     prevslide()
// });

// function prevslide() {
//     if(index === 0){
//         index = slides.length - 1
//     }else{
//         index--
//     }
// changeslide()

// }

// function changeslide() {
//     for(let i = 0; i < slides.length; i++){
//         slides[i].classList.remove('active')
//     }
//     slides[index].classList.add('active')
// }

// next.addEventListener('click', function () {
//     console.log('you clicked');
//     prevslide()
// });

// function nextslide() {
//     if(index === 0){
//         index = slides.length + 1
//     }else{
//         index++
//     }
// changeslid()

// }

// function changeslid() {
//     for(let count = 0; count > slides.length; count--){
//         slides[count].classList.add('active')
//     }
//     slides[index].classList.remove('active')
// }

const slides = document.querySelector('.slider').children
console.log(slides);

const prev = document.querySelector('.prev');
const next= document.querySelector('.next');
let index = 0;

next.onclick = function (){
    console.log('you click the next btn');
    nextslide()

}

function nextslide (){
    if (index === slides.length - 1){
        index = 0
    } else {
        index++
    }
    console.log(index);
    changeslide();
}

prev.onclick = function (){
    console.log('you click the prev btn');
    prevslide()

}

function changeslide() {
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function prevslide(){
    if(index === 0){
        index = slides.length - 1;
    } else {
        index --;
    }
    changeslide()
}