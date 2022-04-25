const tablelist=[
    {
        column_1: "w32fghfg",
        column_2:"dfg546fghfg",
    },
    {
        column_1: "gh.,jkg67",
        column_2:"235gfhg",
    },
    {
        column_1: "w3ghjgh",
        column_2:"dfg546fghfg",
    },
    {
        column_1: "32erthjghg",
        column_2:"d234ferte6fghfg",
    },
    {
        column_1: "3345bfghfg",
        column_2:"46fghfg",
    },
    {
        column_1: "bhkj32523k",
        column_2:"sdf9lmkg",
    },
    {
        column_1: "894sdfkds",
        column_2:"unndkgnk",
    },
    {
        column_1: "ilkdmfsk",
        column_2:"95165sldkf",
    }
]
const sorttable = tablelist.slice();
const table = document.getElementById('idtable');
let cliccol_1 = document.getElementById("columnName_1");
let cliccol_2 = document.getElementById("columnName_2");
let columnamber_1 =document.createElement('th');
sorttable.sort(function(a,b){
    if (a.column_1>b.column_1){
        return 1;
    }
    if (a.column_1<b.column_1){
        return -1;
    }
        return 0;
});

const tablerow= tablelist.forEach(function(item, i) {  
                let row = table.insertRow(1);
                let col_1 = row.insertCell(0);
                let  col_2 = row.insertCell(1);
                });
let col_1 = document.querySelectorAll('tr >td:nth-child(1)');
let col_2 = document.querySelectorAll('tr >td:nth-child(2)');
console.log(col_1[2]);

for(let i=0; i<tablelist.length; i++){
    let text1 = tablelist[i].column_1;
    let text2 = tablelist[i].column_2;
    col_1[i].innerHTML = `${text1}`;
    col_2[i].innerHTML = `${text2}`;
}
cliccol_1.addEventListener('click', function(){
    tablelist.sort(function(a,b){
        if (a.column_1>b.column_1){
            return 1;
        }
        if (a.column_1<b.column_1){
            return -1;
        }
            return 0;
    });
    tablelist.forEach(function(item, i) {
        let text = item.column_1;
        col_1[i].innerHTML= `${text}`;   
    });
}); //створює нові строки в  потрібному порядку  при кожному натисканні
cliccol_2.addEventListener('click', function(){
    tablelist.sort(function(a,b){
        if (a.column_2>b.column_2){
            return 1;
        }
        if (a.column_2<b.column_2){
            return -1;
        }
            return 0;
    });
    tablelist.forEach(function(item, i) {
        let text = item.column_2;
        col_2[i].innerHTML= `${text}`;   
    });
});



