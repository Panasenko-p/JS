let playList = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },
    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },
    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },
    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },
    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },
    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },
    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },
    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }
]


let divmodel = document.createElement(`li`);
let ol = document.getElementById('list');

playList.forEach(function(item, i) {
    let authorName = item.author;
    let songName = item.song;
    let newli =document.createElement('li');
    let index = i+1;
    newli.innerHTML =` ${index}   ${authorName}    ${songName}`;
    //как поставить пробелі в спискке?????????????????????????????
    console.log(authorName);
    console.log(songName);
    console.log(i+1);
    ol.append(newli);
});


