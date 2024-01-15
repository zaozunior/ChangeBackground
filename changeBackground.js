
function changeBackgroundColor () {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    console.log(document.querySelector('h1'));
}

function changeTextColor () {
    console.log(document.querySelector('h1'));
    let h1Element = document.querySelector('h1') 
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    h1Element.style.color = `rgba(${r}, ${g}, ${b})`;
}