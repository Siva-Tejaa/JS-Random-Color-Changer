const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow']

body.style.backgroundColor="#F5CBA7";

button.addEventListener("click", btnClick);

function btnClick() {
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    console.log("Color Changed");
}