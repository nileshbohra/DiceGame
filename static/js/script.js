let img1 = "../static/images/dice1.png";
let img2 = "../static/images/dice2.png";
let img3 = "../static/images/dice3.png";
let img4 = "../static/images/dice4.png";
let img5 = "../static/images/dice5.png";
let img6 = "../static/images/dice6.png";

let arImg = [img1, img2, img3, img4, img5, img6];
// console.log(arImg);
let ran1 = Math.floor(Math.random() * arImg.length);
// console.log(ran1);
let ran2 = Math.floor(Math.random() * arImg.length);
// console.log(ran2);

document.querySelector(".img1").setAttribute('src', arImg[ran1]);
document.querySelector(".img2").setAttribute('src', arImg[ran2]);

if (ran1 > ran2) {
    document.querySelector(".container>h1").textContent = "Player 1 Won";
}
else if (ran1===ran2) {
    document.querySelector(".container>h1").textContent = "Match Tied";
} else {
    document.querySelector(".container>h1").textContent = "Player 2 Won";
}