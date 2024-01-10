let counter = 1;
let element = document.querySelector('.char1');
let character = element.textContent;
let selector = 'char' + counter;
let wrongChar = 0;

window.addEventListener('keydown', check);

function check(event) {
  if (event.key === character) {
    element.className = selector + ' correct';
    if (selector === 'char30' && event.key === 'w') {
      document.querySelector('.typing-result').className = 'typing-result';
      console.log(event.key, selector);
      window.removeEventListener('keydown', check);
    } else {
      document.querySelector('.typing-result').className = 'typing-result hide';
    }
    counter++;
    selector = 'char' + counter;
    element = document.querySelector(`[class= ${selector}]`);
    element.className += ' type';
    character = element.textContent;
    window.addEventListener('keydown', check);
  } else {
    element.className = selector + ' incorrect';
    wrongChar++;
    window.addEventListener('keydown', check);
  }
  const accuracy = Math.round((30 - wrongChar) / 30 * 100);
  const $score = document.querySelector('.score');
  $score.textContent = accuracy + '%';
}

const $yesButton = document.querySelector('.yes');
$yesButton.addEventListener('click', () => {
  location.reload();
});

const $noButton = document.querySelector('.no');
$noButton.addEventListener('click', function () {
  document.querySelector('.typing-result').className = 'typing-result hide';
});
