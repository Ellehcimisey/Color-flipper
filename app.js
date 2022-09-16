const btn = document.querySelector(".button");
const colorName = document.querySelector(".color-name");
const colors = randomColor();


function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 8; i++) {
        color += letters [Math.floor(Math.random()*16)];
    }
    return `${color}`
} //works 

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = colors;
    colorName.textContent = colors;
}) //works but only once