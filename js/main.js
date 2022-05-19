// Copied from this Stackoverflow answer: https://stackoverflow.com/a/1152508
function randomColor() {
  return `#${(0x1000000 + Math.random() * 0xffffff)
    .toString(16)
    .substring(1, 7)}`;
}

// Modified from this Stackoverflow answer: https://stackoverflow.com/a/13532993
function shadeColor(color, percent) {
  let [R, G, B] = color.replace(/rgb\(/, '').replace(/\)/, '').split(',');

  R = Math.floor((R * (100 + percent)) / 100);
  G = Math.floor((G * (100 + percent)) / 100);
  B = Math.floor((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
}

function resetContainer(size) {
  const container = document.querySelector('.container');
  container.textContent = '';
  container.style.display = 'grid';
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  return container;
}

function createSquare() {
  const square = document.createElement('div');
  square.className = 'square';

  square.addEventListener('mouseenter', () => {
    const currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
    if (currentColor === 'rgb(255, 255, 255)') {
      square.style.backgroundColor = randomColor();
    } else {
      square.style.backgroundColor = shadeColor(currentColor, -40);
    }
  });

  return square;
}

function drawGrid(size) {
  const container = resetContainer(size);

  for (let i = 0; i < size * size; i += 1) {
    const square = createSquare();
    container.append(square);
  }
}

function populatePage() {
  const container = document.createElement('div');
  container.className = 'container';
  container.style.height = '100%';

  const sizeButton = document.createElement('button');
  sizeButton.id = 'size_button';
  sizeButton.innerText = 'Click to resize/reset';
  sizeButton.addEventListener('click', () => {
    // eslint-disable-next-line no-alert
    let newSize = prompt('Enter a size for the grid (max 100): ', 16);
    if (newSize > 100) newSize = 100;
    drawGrid(newSize);
  });

  document.querySelector('body').append(sizeButton);
  document.querySelector('body').append(container);
}

populatePage();
drawGrid(16);
