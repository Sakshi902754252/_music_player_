const music = new Audio('Music Website Img and Audio File/audio/1.mp3')
// music.play();

const songs = [
    {
        id: "1",
        songName: `On My Way <br>
        <div class="subtitle">Alen Walker</div>`,
        poster: "Music Website Img and Audio File/img/1.jpg"

    },
    {
        id: "2",
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alen Walker</div>`,
        poster: "Music Website Img and Audio File/img/2.jpg"

    },
    {
        id: "3",
        songName: `Cartoon - on & on <br>
        <div class="subtitle">Daniel levi </div>`,
        poster: "Music Website Img and Audio File/img/3.jpg"

    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br>
        <div class="subtitle">Mortals</div>`,
        poster: "Music Website Img and Audio File/img/4.jpg"

    },
    {
        id: "5",
        songName: `Ertugrul Gazi  <br>
        <div class="subtitle">Ertugrul</div>`,
        poster: "Music Website Img and Audio File/img/5.jpg"

    },
    {
        id: "6",
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster: "Music Website Img and Audio File/img/6.jpg"

    },
    {
        id: "7",
        songName: `Agar Tum Sath Ho <br>
        <div class="subtitle">Tamashaa</div>`,
        poster: "Music Website Img and Audio File/img/7.jpg"

    },
    {
        id: "8",
        songName: `Suna Hai <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "Music Website Img and Audio File/img/8.jpg"

    },
    {
        id: "9",
        songName: `Dilber <br>
        <div class="subtitle">Satyameva Jayate</div>`,
        poster: "Music Website Img and Audio File/img/9.jpg"

    },
    {
        id: "10",
        songName: `Duniya <br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "Music Website Img and Audio File/img/10.jpg"

    },
    {
        id: "11",
        songName: `Lagdi Lahor Di <br>
        <div class="subtitle">Street Dancer 3D</div>`,
        poster: "Music Website Img and Audio File/img/11.jpg"

    },
    {
        id: "12",
        songName: `putt  jat da <br>
        <div class="subtitle">putt jat da</div>`,
        poster: "Music Website Img and Audio File/img/12.jpg"

    },
    {
        id: "13",
        songName: `baarishein <br>
        <div class="subtitle">atif aslam</div>`,
        poster: "Music Website Img and Audio File/img/13.jpg"

    },
    {
        id: "14",
        songName: `vaaste <br>
        <div class="subtitle">dhavni bhanushali </div>`,
        poster: "Music Website Img and Audio File/img/14.jpg"

    },
    {
        id: "15",
        songName: `Lut gaye<br>
        <div class="subtitle">jubin Nautiyal</div>`,
        poster: "Music Website Img and Audio File/img/15.jpg"

    },
    {
        id: "16",
        songName: `Tu meri jindagi hai tu <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "Music Website Img and Audio File/img/16.jpg"

    },
    {
        id: "17",
        songName: `Batao yaad hai tumko wo jab Dill Churaya Tha <br>
        <div class="subtitle">Rahat Fateh ali khan</div>`,
        poster: "Music Website Img and Audio File/img/17.jpg"

    },
    {
        id: "18",
        songName: `Pasoori <br>
        <div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster: "Music Website Img and Audio File/img/18.jpg"

    },
    {
        id: "19",
        songName: `Eh Munde Pagal Ne Saree <br>
        <div class="subtitle">AP Dhillon, Gurinder Gill,Shinda Kahlon</div>`,
        poster: "Music Website Img and Audio File/img/19.jpg"

    },
    {
        id: "20",
        songName: `Vaande Mataram <br>
        <div class="subtitle">Bakin Chandra</div>`,
        poster: "Music Website Img and Audio File/img/20.jpg"

    }
]


Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
})

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');


masterplay.addEventListener('click',()=>{
    if (music.paused  || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
       
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeallbackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `Music Website Img and Audio File/audio/${index}.mp3`;
        poster_master_play.src = `Music Website Img and Audio File/img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        download_music.href = `Music Website Img and Audio File/audio/${index}.mp3`;

        let songtitles = songs.filter((els)=>{
            return els.id == index;
        });

        songtitles.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);

        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
   });


})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentend.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentstart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
     vol_bar.style.width = `${vol_a}%`;
     vol_dot.style.left = `${vol_a}%`;
     music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `Music Website Img and Audio File/audio/${index}.mp3`;
    poster_master_play.src = `Music Website Img and Audio File/img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');


    let songtitles = songs.filter((els)=>{
        return els.id == index;
    });

    songtitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;

    });
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeallplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

next.addEventListener('click',()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songitem')).length ){
        index = 1;
    }
    music.src = `Music Website Img and Audio File/audio/${index}.mp3`;
    poster_master_play.src = `Music Website Img and Audio File/img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');


    let songtitles = songs.filter((els)=>{
        return els.id == index;
    });

    songtitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;

    });
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeallplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})

// addEventListener attaches an event handler to a element

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item =document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})

// addEventListener attaches an event handler to a element

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})
