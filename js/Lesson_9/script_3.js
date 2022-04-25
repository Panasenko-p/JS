class Employee {
    constructor(name, surname,prof, age, gender) {
        this.name = name;
        this.surname =surname;
        this.prof =prof;
        this.age =age;
        this.gender =gender;
    }
};
const arreyworker =[ 
    ['Amelia', 'Adamson', 'Teller', '28', 'women'],
    ['Emily', 'Evans', 'Copywriter', '21','women'],
    ['Jessica','Johnson', 'Teller', '24', 'women'],
    ['Samuel','Parson', 'Loan officer', '34', 'male'],
    ['Jack','Flatcher', 'Loan officer', '39', 'male'],
    ['Thomas','Gilbert', 'Merchandizer', '21', 'male' ]
];
class EmpTable {
    constructor(i){
        this.name = arreyworker[i][0]
        this.surname = arreyworker[i][1];
        this.prof = arreyworker[i][2];
        this.age = arreyworker[i][3];
        this.gender = arreyworker[i][4];
    };
    getHtml (){
     return   `name ${this.name} surname ${this.surname} proft ${this.prof} age ${this.age} gender ${this.gender}`;
    };
};
console.log(arreyworker[2][2]);

const a = new EmpTable(4);
console.log(a.getHtml());