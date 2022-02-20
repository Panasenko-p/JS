const colorred = document.getElementById('redblock');
const coloryellow = document.getElementById('yellowblock');
const colorgreen = document.getElementById('greenblock');
let greenclass = colorgreen.className;
let redclass = colorred.className;
let yellowclass = colorgreen.className;


const switchcolor = ()=> {
    if(colorred.classList.contains('red')){
        colorred.classList.remove('red');
        colorgreen.classList.add('green');
    } else if (colorgreen.classList.contains('green')){
        colorgreen.classList.remove('green');
        coloryellow.classList.add('yellow');
    } else if (coloryellow.classList.contains('yellow')) {
        coloryellow.classList.remove('yellow');
        colorred.classList.add('red');
        console.log(colorred.className);
    }

    
      
        // colorgreen.classList.add('color')
    //     coloryellow.classList.toggle('yellow');
    //     colorgreen.classList.toggle('green');
    }
console.dir(colorred.className);
console.dir(coloryellow.className);
console.dir(colorgreen.className);