const CAR_FEATURE = {
    manufacturer: `BMW`,
    model: `7_model`,
    year:`2019`,
    speed: `100` ,
    tank:`50`,
    fuel_consumption_100км:`6.8`,
};
console.log(CAR_FEATURE);
CAR_FEATURE.car_license = `B2`;
CAR_FEATURE.Fuel = `diesel`;

time =(a,b) => {
    let fuel = +CAR_FEATURE.fuel_consumption_100км;
    let speed = +CAR_FEATURE.speed;
    let length = +a;
    let tank_car = +CAR_FEATURE.tank;
    let stop = Math.floor(length/speed/4);
    let refueling = Math.floor(length/fuel/tank_car);
    let travel_time = length/speed+stop;
    
    if (b != `B2`) {
        return console.log(`Ви не можите здійснити поїздку`)
    } else if (refueling>0)  { 
        return console.log(`Вам необхідно зробити дозаправку ${refueling},
        час поїздки ${travel_time}`)
    } else {
        console.log(`час поїздки ${travel_time} години`);
    }
};
time(300,CAR_FEATURE.car_license);


