const section = document.querySelector('.section');
const playerScore = document.querySelector('span');
const score = 0;

playerScore.textContent = score;

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
    console.log(item);
  });
  const card = document.createElement('div');
  const face = document.createElement('img');
  const back = document.createElement('div');
  card.classList = 'card';
  face.classList = 'face';
  back.classList = 'back';
};

cardGenerator();
