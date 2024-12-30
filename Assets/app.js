let random = document.querySelector('#random');
let btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    let red = Math.round(Math.random() *255);
    let green = Math.round(Math.random() *255);
    let blue = Math.round(Math.random() *255);

    random.style.background = `rgb(${red},${green},${blue})`;
})