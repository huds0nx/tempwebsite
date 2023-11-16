import {
    gsap
} from "https://cdn.skypack.dev/gsap@3.11.4";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";

// apply gsap fade in animation on click of a button
const button = document.getElementById('enter');
const welcome = document.querySelector('.welcome');
const mainContent = document.querySelector('.main-content');
button.addEventListener('click', () => {
    gsap.fromTo(welcome, {
        opacity: 1
    }, {
        opacity: 0,
        duration: 2,
        ease: 'power1.out'
    })
    gsap.fromTo(mainContent, {
        opacity: 0
    }, {
        opacity: 1,
        duration: 2,
        ease: 'expo.in'
    });
});

// on click of sound icon mute music
const mute = document.querySelector('.music img:nth-child(1)');
const unmute = document.querySelector('.music img:nth-child(2)');
let musbg = document.getElementById("bgmus");
musbg.volume = 0.1;
mute.addEventListener('click', () => {
    audio.pause();
    mute.style.display = 'none';
    unmute.style.display = 'block';
});
unmute.addEventListener('click', () => {
    audio.play();
    unmute.style.display = 'none';
    mute.style.display = 'block';
});

var audio = document.querySelector('audio');

// on click of button fade away welcome div
button.addEventListener('click', () => {
    welcome.style.display = 'none';
});