const grid=document.getElementById("grid")
const message=document.getElementById("message")
const popup=document.getElementById("popup")

let winningHeart=Math.floor(Math.random()*9)

for(let i=0;i<9;i++){

let heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="💗"

heart.onclick=()=>{

if(i===winningHeart){

heart.innerHTML="💖"

flowerRain()

popup.classList.remove("hidden")

}else{

const hints=[
"Not this one… but you're getting closer 💕",
"Still searching for Raj's heart 😌",
"Almost there Sadhvi ❤️"
]

message.innerText=hints[Math.floor(Math.random()*hints.length)]

heart.innerHTML="🖤"

}

}

grid.appendChild(heart)

}

function closePopup(){
popup.classList.add("hidden")
}

/* flower rain */

function flowerRain(){

for(let i=0;i<40;i++){

let flower=document.createElement("div")

flower.className="flower"
flower.innerHTML="🌹"

flower.style.left=Math.random()*100+"vw"

document.body.appendChild(flower)

setTimeout(()=>flower.remove(),3000)

}

}