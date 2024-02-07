const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');
const giftImage = document.querySelector('.gift-image');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
	jsConfetti.addConfetti().then(() => {});
  giftImage.style.display = 'block'; // Show the gift image
});
