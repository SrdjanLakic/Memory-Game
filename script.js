const section = document.querySelector('section');
const playerScore = document.querySelector('#playerScore');
const playerLivesDisplay = document.querySelector('#playerLives');
const result = document.querySelector('.result');
let score = 0;
let playerLivesCount = 6;

playerScore.textContent = score;
playerLivesDisplay.textContent = playerLivesCount;

const getTeam = () => [
  { imgSrc: './img/bulls.png', name: 'bulls' },
  { imgSrc: './img/celtics.png', name: 'celtics' },
  { imgSrc: './img/heat.png', name: 'heat' },
  { imgSrc: './img/knicks.png', name: 'knicks' },
  { imgSrc: './img/lakers.png', name: 'lakers' },
  { imgSrc: './img/mavericks.png', name: 'mavericks' },
  { imgSrc: './img/nuggets.png', name: 'nuggets' },
  { imgSrc: './img/spurs.png', name: 'spurs' },
  { imgSrc: './img/bulls.png', name: 'bulls' },
  { imgSrc: './img/celtics.png', name: 'celtics' },
  { imgSrc: './img/heat.png', name: 'heat' },
  { imgSrc: './img/knicks.png', name: 'knicks' },
  { imgSrc: './img/lakers.png', name: 'lakers' },
  { imgSrc: './img/mavericks.png', name: 'mavericks' },
  { imgSrc: './img/nuggets.png', name: 'nuggets' },
  { imgSrc: './img/spurs.png', name: 'spurs' },
];

const randomizeTeams = () => {
  const cardData = getTeam();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomizeTeams();

  cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    face.src = item.imgSrc;
    card.setAttribute('name', item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      checkMatch(e);
    });
  });
};
const checkMatch = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped');
  console.log(clickedCard);

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute('name') ===
      flippedCards[1].getAttribute('name')
    ) {
      console.log('match');
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      });
      score++;
      playerScore.textContent = score;
      if (score === 2) {
        result.textContent = 'You WON 🏆';
        setTimeout(restart, 3000);
      }
    } else {
      console.log('wrong');
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 1000);
      });
      playerLivesCount--;
      playerLivesDisplay.textContent = playerLivesCount;
      if (playerLivesCount === 0) {
        result.textContent = `You LOSE⛔, your score is ${score}`;
        setInterval(restart, 3000);
      }
    }
  }
};

const restart = () => {
  let cardData = randomizeTeams();
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    cards[index].pointerEvents = 'all';
    faces[index].src = item.imgSrc;
  });
  score = 0;
  playerLivesCount = 6;
  playerScore.textContent = score;
  playerLivesDisplay.textContent = playerLivesCount;
  result.textContent = '';
};

cardGenerator();
