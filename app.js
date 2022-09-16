const button = document.querySelector(".button");
const colors = randomColor();

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random()*16)];
    }
    return `${color} 60% 50%`
}