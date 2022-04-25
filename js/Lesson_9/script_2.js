class feltPen {
    constructor(color, surplus){
        this.color = color;
        this.surplus = +surplus;
    };
    textColor(){
        const divText = document.createElement('div');
        const text = prompt('Введіть текст');
        const lengthText = `${this.surplus/0.5}`
        divText.style.color=`${this.color}`;
        divText.innerHTML = text.substring(0,lengthText);
        document.body.append(divText);
        console.log(text);
        console.log(this.surplus);
        console.log(lengthText);
    };
};
const a = new feltPen('red',3);
a.textColor();

class feltPen extends feltPen_1 {

    constructor(color, surplus,fillUp){
        super(color, surplus)
        this.fillUp = +fillUp;
    };
    textColor(){
        const divText = document.createElement('div');
        const text = prompt('Введіть текст');
        const lengthText = `${(this.surplus+this.fillUp)/0.5}`
        divText.style.color=`${this.color}`;
        divText.innerHTML = text.substring(0,lengthText);
        document.body.append(divText);
        console.log(text);
        console.log(this.surplus);
        console.log(lengthText);
    };  
};
