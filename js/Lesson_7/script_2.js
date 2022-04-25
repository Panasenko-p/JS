const divmodel = document.getElementById('model')
const openmodel = () => {
    divmodel.style.display='block';
}
console.dir(divmodel);
const closemodel = () => {
    divmodel.style.display='none';
}
document.addEventListener('keydown',function(event){
    if  (event.code =='KeyG'){
        let valueText = document.getElementById('textvalue').value;
        document.getElementById('block').innerHTML =valueText;
        block.style.display='block';
        textblock.style.display='none';
    };
});