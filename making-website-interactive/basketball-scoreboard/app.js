const homeScoreEl = document.getElementById('home-score');
const awayScoreEl = document.getElementById('away-score');
const awayTitleEl = document.getElementById('away-title');
const homeTitleEl = document.getElementById('home-title');

let homeScore = 0;
let awayScore = 0;

function addOneHome() {
    homeScore++
    homeScoreEl.textContent = homeScore
    highLightWinner()
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highLightWinner()

}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highLightWinner()

}


function addOneAway() {
    awayScore++
    awayScoreEl.textContent = awayScore;
    highLightWinner()

}

function addTwoAway() {
    awayScore += 2
    awayScoreEl.textContent = awayScore;
    highLightWinner()

}

function addThreeAway() {
    awayScore += 3
    awayScoreEl.textContent = awayScore;
    highLightWinner()

}

function clearAwayScore() {
    awayScore = 0
    awayScoreEl.textContent = 0;
    awayTitleEl.style.color = 'white';

}

function clearHomeScore() {
    homeScore = 0
    homeScoreEl.textContent = 0;
    homeTitleEl.style.color = 'white';

}

function highLightWinner() {
    if (homeScore > awayScore) {
        homeTitleEl.style.color = '#f9d64e';
        awayTitleEl.style.color = 'white';
    } else if (awayScore > homeScore) {
        awayTitleEl.style.color = '#f9d64e';
        homeTitleEl.style.color = 'white';
    } else {
        awayTitleEl.style.color = 'white';
        homeTitleEl.style.color = 'white';
    }
}
