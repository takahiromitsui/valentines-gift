const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');
const giftImage = document.querySelector('.gift-image');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
  jsConfetti.addConfetti().then(() => {});
  button.textContent = 'You Won!'; // Change the button text
  giftImage.style.display = 'block'; // Show the gift image
});

