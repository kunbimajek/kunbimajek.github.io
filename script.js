//toggle modes
document
  .querySelector('.mode-icon')
  .addEventListener('click', () => {
    const classList = document.querySelector(".card").classList;
      classList.toggle('card-light');
    	classList.toggle('card-dark');
});

//toggle states
let currentClass = 0;
document
  .querySelector('.state-icon')
  .addEventListener('click', () => {
    const classes = ['card-full', 'card-minimized', 'card-compact'];
    const classList = document.querySelector(".card").classList;
      classList.remove(classes[currentClass]);
      currentClass + 1 < classes.length ? currentClass += 1 : currentClass = 0;
      classList.add(classes[currentClass]);
});
