// ---------- Typewriter Letter (~150 words) ----------
const letterText = `Ann Kaboo, every day with you is a dream come true. Your smile lights up my darkest days, your voice fills my heart with joy, and your love makes me the happiest person alive. I promise to always cherish, support, and adore you, to laugh and cry with you, and to make every moment unforgettable. You are my soulmate, my heart, my everything. I love you endlessly, my Kabby. Forever yours, Raymond 💙`;
let i=0;
const letterEl = document.getElementById("letter-text");
function typeWriter() {
  if(i<letterText.length){
    letterEl.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter,35);
  }
}
typeWriter();

// ---------- Countdown ----------
const daysLoved = 30;
document.getElementById("countdown").innerText = `I've loved you for ${daysLoved} days 💖`;

// ---------- Gift boxes ----------
const boxes = document.querySelectorAll(".box");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");
boxes.forEach(box=>{
  box.addEventListener("click",()=>{
    modal.style.display="block";
    modalText.innerHTML=`<img src="${box.src}" width="100"><br>${box.dataset.content}`;
  });
});
closeBtn.onclick=()=>{modal.style.display="none";}
window.onclick=e=>{if(e.target==modal) modal.style.display="none";}

// ---------- Music & Voice ----------
const music = document.getElementById("music");
const voice = document.getElementById("voice");
document.getElementById("music-toggle").onclick=()=>{ music.paused?music.play():music.pause(); }
document.getElementById("volume").oninput=e=>{ music.volume=e.target.value; }

document.getElementById("voice-toggle").onclick=()=>{ voice.paused?voice.play():voice.pause(); }
document.getElementById("voice-volume").oninput=e=>{ voice.volume=e.target.value; }

// ---------- Word Scramble Game ----------
const words = ["RAYMOND","KABBY","LOVE","HEART","HUG","KISS","CANDY","CUPID","SMILE","ROMANCE"];
const grid = document.getElementById("puzzle-grid");
const result = document.getElementById("puzzle-result");
let allLetters = [];

// Prepare grid letters
words.forEach(word=>{
  word.split("").forEach(l=>{
    let box = document.createElement("div");
    box.className="puzzle-box";
    // Randomly prefill some letters
    if(Math.random()<0.3){ box.textContent = l; box.classList.add("prefill"); box.contentEditable=false; }
    else{ box.contentEditable=true; }
    box.dataset.letter = l;
    grid.appendChild(box);
    allLetters.push(box);
  });
});

// Fill remaining grid if needed to make square
while(allLetters.length < 100){ // 10x10 grid
  let emptyBox = document.createElement("div");
  emptyBox.className="puzzle-box"; emptyBox.contentEditable=true; emptyBox.dataset.letter="";
  grid.appendChild(emptyBox); allLetters.push(emptyBox);
}

// Check puzzle
document.getElementById("checkPuzzle").onclick=()=>{
  let correct=0;
  allLetters.forEach(box=>{
    if(box.textContent.toUpperCase()===box.dataset.letter && box.dataset.letter!=="") correct++;
  });
  result.innerText=`You got ${correct} out of ${words.join("").length} letters correct! 💖`;
}