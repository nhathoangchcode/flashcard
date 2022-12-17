const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {
    Hello: "Xin chao",
    GoodBye: "Tam biet",
    Symphathy: "Dong cam",
    Convey: "Truyen tai",
    Transmission: "Su van chuyen",
    Conquer: "Che ngu, chinh phuc, xam luoc",
    "I drink water": "Toi uong nuoc"
}

data  = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    /* console.log(randomTerm); */
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

/* array = ["water", "fire", "earth", "air"]

console.log(array[1]) */
checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function(){
    getRandomWord();
});
