const mouse_corner = document.getElementById('corner');
const blocktext = document.getElementById('idtext');
console.dir(blocktext);
console.dir(blocktext.clientHeight);
console.dir(mouse_corner);


let  startClientX = 0;
let startClienty = 0;
let endClientX = 0;
let endClienty = 0;

mouse_corner.addEventListener('mousedown', function(event) {
    let startClientX = event.clientX;
    let  startClienty = event.clientY;
    console.log(event.clientX);
    console.log(event.clientY);
    //отримуємо координати затискання на кут
});

document.addEventListener('mouseup', function(event) {
    var endClientX = event.clientX;
    var endClienty = event.clientY;
    console.log(event.clientX);
    console.log(event.clientY);
    //отримуємо координати відпускання мишки 
});


// blocktext.style.height=(endClientX);
// blocktext.style.width =(endClienty);