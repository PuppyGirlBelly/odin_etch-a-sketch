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
    square.style.backgroundColor = '#cecece';
  });

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'unset';
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
  container.style.height = '100vh';

  const sizeButton = document.createElement('button');
  sizeButton.id = 'size_button';
  sizeButton.innerText = 'Click to resize/reset';
  sizeButton.addEventListener('click', () => {
    // eslint-disable-next-line no-alert
    const newSize = prompt('Enter a size for the grid: ', 16);
    drawGrid(newSize);
  });

  document.querySelector('body').append(sizeButton);
  document.querySelector('body').append(container);
}

populatePage();
drawGrid(16);
