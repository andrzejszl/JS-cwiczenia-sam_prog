const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "",
    playerHandHTML: ""
}

const hands = [...document.querySelectorAll('.select img')];

//pierwsza funkcja
function handSelection() {
    // console.log(this);
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px red'
}
//wybor komputera
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}
//sprawdzenie wynikow
function checkResult(player, ai) {
    if (player === ai) {
        console.log('draw');
        return 'draw';
    } else if (player === hands[0].dataset.option && ai === hands[1].dataset.option || player === hands[1].dataset.option && ai === hands[2].dataset.option || player === hands[2].dataset.option && ai === hands[0].dataset.option) {
        console.log(`wygrałes gracz ${player} ai ${ai}`);
        return 'win';
    } else {
        console.log(`przgrałeś player ${player} ai ${ai}`);
        return 'loss'
    }
}

//publikacja wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrał komputer :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }
}

//czyszczenie na koniec gry
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
    game.aiHand = '';
}
//funkcja sterujaca
function startGame() {
    if (!game.playerHand) {
        return alert('Wybierz dłoń!')
    }
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame);