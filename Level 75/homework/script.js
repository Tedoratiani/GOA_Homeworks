const child = document.getElementById('child');
const parent = document.getElementById('parent'); 

let x = 0;
let y = 0;


const parentWidth = parent.clientWidth;
const parentHeight = parent.clientHeight;


document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowLeft": 
            if (x > 0) x -= 30;  
            break;
        case "ArrowUp": 
            if (y > 0) y -= 30;  
            break;
        case "ArrowRight": 
            if (x < 480) x += 30;  
            break;
        case "ArrowDown": 
            if (y < 480) y += 30;  
            break;
        default:
            return; 
    }
    child.style.left = `${x}px`;
    child.style.top = `${y}px`;
});