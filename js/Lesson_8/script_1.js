let block = document.getElementById('block');
let textblock = document.getElementById('textvalue')
textblock.style.display='none';
// console.log(textblock.innerHTML);

document.addEventListener('keydown', function(event){
    if (event.code =='KeyE'&&(event.ctrlKey||event.metaKey)){
        event.preventDefault();
        textblock.style.display='block';
        block.style.display='none'
    };
});
// console.dir(block.textContent);
document.addEventListener('keydown',function(event){
    if  (event.code =='KeyG'&&(event.ctrlKey||event.metaKey)){
        event.preventDefault();
        let valueText = document.getElementById('textvalue').value;
        document.getElementById('block').innerHTML =valueText;
        block.style.display='block';
        textblock.style.display='none';
    };
});
