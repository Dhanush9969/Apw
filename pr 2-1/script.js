const questions = [
    {
        q: "What level does Magikarp evolve into Gyarados?",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
        options: ["Level 15", "Level 20", "Level 25", "Level 30"],
        answer: 1
    },
    {
        q: "What is the strongest weakness of a Dragon-type Pokémon?",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
        options: ["Fire", "Water", "Ice", "Grass"],
        answer: 2
    },
    {
        q: "Which Pokémon is known as the 'God of all Pokémon'?",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
        options: ["Mewtwo", "Arceus", "Rayquaza", "Dialga"],
        answer: 1
    },
    {
        q: "Charizard is a Fire type and what else?",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        options: ["Dragon", "Flying", "Fighting", "Ground"],
        answer: 1
    }
];

let currentIdx = 0;
let score = 0;

function startQuiz() {
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const qData = questions[currentIdx];
    document.getElementById('progress').innerText = `Question ${currentIdx + 1}/${questions.length}`;
    document.getElementById('poke-img').src = qData.img;
    document.getElementById('question-text').innerText = qData.q;
    
    const optionsDiv = document.getElementById('options-container');
    optionsDiv.innerHTML = '';
    
    qData.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(choice) {
    if (choice === questions[currentIdx].answer) {
        score++;
        document.getElementById('score-display').innerText = `Score: ${score}`;
    }
    
    currentIdx++;
    if (currentIdx < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = `You scored ${score} out of ${questions.length}!`;
}