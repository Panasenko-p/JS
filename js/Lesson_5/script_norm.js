const objacttime = {
    seconds : 59,
    minutes : 12,
    hour : 23
}
console.log( ` ${objacttime.hour} : ${objacttime.minutes} : ${objacttime.seconds} ` );
time_second = (a) => {
    let seconds = objacttime.seconds +a;
    let minutes = objacttime.minutes;
    let hour = objacttime.hour;
    if (seconds >= 60) {
        minutes = minutes+Math.floor(seconds/60);
        seconds = seconds%60;
        if (minutes >= 60) {
            hour = hour+Math.floor(minutes/60);
            minutes = minutes%60;
            if (hour/24 >= 1) {
                hour = hour%24;
            }
        }
    } 
    console.log( ` ${hour} : ${minutes} : ${seconds} ` ); 
    }
time_second(3800);

time_minutes = (a) => {
    let seconds = objacttime.seconds ;
    let minutes = objacttime.minutes+a;
    let hour = objacttime.hour;
    console.log(minutes);
    if (minutes >= 60) {
        hour = hour+Math.floor(minutes/60);
        minutes = minutes%60;
        if (hour/24 >= 1) {
            hour = hour%24;
        }
    } 
    console.log( ` ${hour} : ${minutes} : ${seconds} ` ); 
    }
time_minutes(4);
time_hour = (a) => {
    let seconds = objacttime.seconds;
    let minutes = objacttime.minutes;
    let hour = objacttime.hour +a;
    console.log(minutes);
    if (hour/24 >= 1) {
        hour = hour%24;
    }
    console.log( ` ${hour} : ${minutes} : ${seconds} ` ); 
    }
time_hour(4);






