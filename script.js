import { iscritti_instagram, iscritti_tiktok, iscritti_youtube } from "./follower_count.js";

let insta = document.getElementById('instagram');
let tikitok = document.getElementById('tiktok');
let youtube = document.getElementById('youtube');

insta.addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/mattia_de_vincentis.blog/';
})

tikitok.addEventListener('click', function() {
    window.location.href = 'https://www.tiktok.com/@mattiadv.blog';
})

youtube.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/@mattiadevincentisblog';
})

let num_isc_ig = document.getElementById('cont_instagram');
let num_isc_tt = document.getElementById('cont_tiktok');
let num_isc_yt = document.getElementById('cont_youtube');

num_isc_ig.innerHTML = iscritti_instagram + "/10.000 Follower";
num_isc_tt.innerHTML = iscritti_tiktok + "/10.000  Follower";
num_isc_yt.innerHTML = iscritti_youtube + "/1000 Follower";

let pallini_ig = document.getElementById('followerInstagram');
let pallini_tt = document.getElementById('followerTikTok');
let pallini_yt = document.getElementById('followerYoutube');

let pallino;

for (let i = 0; i < iscritti_youtube; i++) {
    pallino = document.createElement('div');
    pallino.classList.add('follower');
    pallini_yt.appendChild(pallino);
}

for (let i = 0; i < iscritti_tiktok; i++) {
    pallino = document.createElement('div');
    pallino.classList.add('follower');
    pallini_tt.appendChild(pallino);
}

for (let i = 0; i < iscritti_instagram; i++) {
    pallino = document.createElement('div');
    pallino.classList.add('follower');
    pallini_ig.appendChild(pallino);
}