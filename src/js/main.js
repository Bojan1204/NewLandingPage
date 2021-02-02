let normal = document.querySelector('.normalText');
 

const hideText =()=>{
    let neznam = normal.getBoundingClientRect().top;
    let ekran = window.innerHeight / 1.4;  
   if(neznam < ekran){
       normal.classList.add('konj');
   }
   
}

addEventListener('scroll', hideText);


const navigacija = document.querySelector('.navigacija');



window.onscroll =()=>{
    if(window.scrollY > 5){
        navigacija.classList.add('addNavigation');
    }else{
        navigacija.classList.remove('addNavigation');
    }
};








































// if(window.scrollY > 1){
//     navigacija.classList.toggle('addNavigation');
// }else(window.scrollY > 800){
//     navigacija.classList.toggle('addNavigationSecond');
//     navigacija.classList.remove('addNavigation');

// }