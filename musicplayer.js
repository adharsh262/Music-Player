let progress = document.getElementById("progress");
let song=document.getElementById("song");
let ctrIcon=document.getElementById("ctrIcon");
let ImgUrlEl=document.getElementById("ImgUrl");
let headTitleSongEl=document.getElementById("headTitleSong");
let directorTitleSongEl=document.getElementById("directorTitleSong");
song.pause();
let countEL=-1;
let arr=[
    {
        Songpath:"music/ismart.mp3"   ,
        Songname:'Ismart Shankar',
        SongDirectedby:"Puri Jagannadh",
        SongImgurl:"https://th.bing.com/th/id/R.58388b6411df0eb67adadcdd39895cba?rik=CvLym0l6m21Y%2fQ&pid=ImgRaw&r=0",
        
    },
    {
        Songpath:"music/IsmartTitleSong.mp3"   ,
        Songname:'Ismart Shankar',
        SongDirectedby:"Puri Jagannadh",
        SongImgurl:"https://telugutracks.com/wp-content/uploads/2020/05/Ismart-Shankar-Title-Song-Lyrics.jpg",
        
    },
    {
        Songpath:"music/psyco.mp3"   ,
        Songname:'Sahoo',
        SongDirectedby:"Aniruid",
        SongImgurl:"https://timesofindia.indiatimes.com/photo/70290544/size-208033/70290544.jpg",
        
    },
    {
        Songpath:"music/unstop.mp3"   ,
        Songname:'Unstoppable',
        SongDirectedby:"sia-unstoppable",
        SongImgurl:"https://th.bing.com/th/id/OIP.1VfdejIGh5-LSjZdlMvxzgHaEK?pid=ImgDet&rs=1",
        
    }
];

song.onloadedmetadata=function() {
    progress.max=song.duration;
    progress.value=song.currentTime;

}


function playpause() {
    if(ctrIcon.classList.contains("fa-pause")) {
        song.pause();
        countEL=-1;
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    }else {
        song.play();
        countEL=-1;
        ctrIcon.classList.remove("fa-play");
        ctrIcon.classList.add("fa-pause");
    }
}

if(song.play()) {
    setInterval(()=>{
        progress.value=song.currentTime;
    },5);
}

progress.onchange=function() {
    song.play();
    song.currentTime=progress.value;
    ctrIcon.classList.remove("fa-play");
    ctrIcon.classList.add("fa-pause");
}

function playnext() {
    
    countEL++;
    let LenArray=arr.length;
    if(countEL<LenArray) {
        ImgUrlEl.setAttribute("src",arr[countEL]["SongImgurl"]);
        headTitleSongEl.textContent=arr[countEL]["Songname"];
        directorTitleSongEl.textContent=arr[countEL]["SongDirectedby"];
        song.setAttribute("src",arr[countEL]["Songpath"]);
        console.log(countEL);
    }else{
        countEL=0;
    }
    

}

function playafter() {
    song.pause();
    countEL--;
    let LenArray=arr.length;
    if(countEL<0) {
        if(-countEL<LenArray) {
            ImgUrlEl.setAttribute("src",arr[-countEL]["SongImgurl"]);
            headTitleSongEl.textContent=arr[-countEL]["Songname"];
            directorTitleSongEl.textContent=arr[-countEL]["SongDirectedby"];
            song.setAttribute("src",arr[-countEL]["Songpath"]);
        }else{
            countEL=-1;
        }

    }else{
        if(countEL<LenArray) {
            ImgUrlEl.setAttribute("src",arr[countEL]["SongImgurl"]);
            headTitleSongEl.textContent=arr[countEL]["Songname"];
            directorTitleSongEl.textContent=arr[countEL]["SongDirectedby"];
            song.setAttribute("src",arr[countEL]["Songpath"]);
        }else{
            countEL=-1;
        }
    }
    console.log(countEL);
    song.play();

}
