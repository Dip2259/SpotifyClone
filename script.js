console.log("Spotify Clone");
let audioElem = new Audio('Song/1.mp3');
let play_pause = document.getElementById('play');
let gif = document.getElementById('gif');
let songIndex = 0;
let progressBar = document.getElementById('progressBar');
let songs = [{songName:'Tum Hi Ho',path:'1.mp3',coverPath:'Cover/1.png'},
                {songName:'Ae Dil Hai Mushkil',path:'2.mp3',coverPath:'Cover/2.png'},
                {songName:'Muskurane',path:'3.mp3',coverPath:'Cover/3.png'},
                {songName:'Gerua',path:'4.mp3',coverPath:'Cover/4.png'},
                {songName:'Teri Mere Kahaani',path:'5.mp3',coverPath:'Cover/5.png'}];
play_pause.addEventListener('click',()=>{
    if(audioElem.paused){
        audioElem.play();
        play_pause.classList.replace('fa-play-circle','fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElem.pause();
        play_pause.classList.replace('fa-pause-circle','fa-play-circle')
        gif.style.opacity = 0;
    }
})
let songpad = Array.from(document.getElementsByClassName('songpad'));
songpad.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})
audioElem.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElem.currentTime/audioElem.duration)* 100); 
    progressBar.value = progress;
})
progressBar.addEventListener('change', ()=>{
    audioElem.currentTime = progressBar.value * audioElem.duration/100;
})
function change(){
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.replace('fa-pause-circle','fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
         change();
         if(audioElem.paused){
            progressBar.value = 0;
            songIndex = parseInt(e.target.id);
            audioElem.src = `Song/${songIndex}.mp3`;
            audioElem.play();
            e.target.classList.replace('fa-play-circle','fa-pause-circle');
            play_pause.classList.replace('fa-play-circle','fa-pause-circle');
            gif.style.opacity = 1;
            document.getElementById('Sname').innerText = songs[songIndex-1].songName;
        }
        else if(audioElem.played){
            audioElem.pause();
            e.target.classList.replace('fa-pause-circle','fa-play-circle')
            play_pause.classList.replace('fa-pause-circle','fa-play-circle')
            gif.style.opacity = 0;
        }
     })
})
