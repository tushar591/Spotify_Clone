var play = document.getElementById("play");
var progessbar = document.getElementById("myprogressbar");
var song = new Audio('m2.mp3');
var gif = document.getElementById('gif');
var changename = document.getElementById('changename');  
let index = 0;  

play.addEventListener('click', function(){
    if(song.paused || song.currentTime <= 0){
        song.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        song.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    changename.innerHTML = 'm'+(index+1)+'.mp3';
});

song.addEventListener('timeupdate', () => {
    var done = parseInt(((song.currentTime) / (song.duration)) * 100);
    progessbar.value = done;
});

progessbar.addEventListener('change', function(){
    song.currentTime = (progessbar.value * song.duration) / 100;
});

const prevplay = function(){
    Array.from(document.getElementsByClassName('songnamep')).forEach(function(e){
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-solid fa-play');
    });
};

Array.from(document.getElementsByClassName('songnamep')).forEach(function(element){
    element.addEventListener('click', function(e){
        prevplay();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-solid fa-play");
        e.target.classList.add('fa-pause-circle');
        song.src = 'm'+(index+1)+'.mp3';
        song.play();
        play.classList.remove("fa-solid fa-play");
        play.classList.add('fa-pause-circle');
        changename.innerHTML = 'm'+(index+1)+'.mp3';
    });
});

document.querySelector('.prev').addEventListener('click', function(){
    if(index === 0){
        index = 6;  
    } else {
        index -= 1;
    }
    song.src = 'm'+(index+1)+'.mp3';
    song.play();
    changename.innerHTML = 'm'+(index+1)+'.mp3';
});

document.querySelector('.next').addEventListener('click', function(){
    if(index === 6){
        index = 0;  
    } else {
        index += 1;
    }
    song.src = 'm'+(index+1)+'.mp3';
    song.play();
    changename.innerHTML = 'm'+(index+1)+'.mp3';
});
