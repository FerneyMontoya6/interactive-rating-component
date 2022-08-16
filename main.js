const ratingCard = document.querySelector('.rating-card');
const answerCard = document.querySelector('.answer-card');
const ratingOptions = document.querySelector('.rating-options');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const r5 = document.getElementById('r5');
const btn = document.querySelector('button');

const calificationSelected = document.getElementById('calification-selected');


ratingOptions.addEventListener('click', (e) => {
  const elementClicked = e.target;
  const elementNeeded = 'rating-circles'; 

  if(elementClicked.className === elementNeeded) {
    r1.checked = false;
    r2.checked = false;
    r3.checked = false;
    r4.checked = false;
    r5.checked = false;

    elementClicked.checked = true;
  }

  calificationSelected.innerText = elementClicked.value;
});

btn.addEventListener('click', () => {
  ratingCard.classList.toggle('inactive');
  answerCard.classList.toggle('inactive');
});
