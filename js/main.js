const container = document.createElement('div');
container.className = 'container';
container.style.height = '100%';
container.style.display = 'grid';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
document.querySelector('body').append(container);

for (y = 0; y < 16; y++) {
  for (x = 0; x < 16; x++) {
    let square = document.createElement('div');
    square.id = `${x}-${y}`;
    square.className = 'square';
    square.style.display = 'inline-block';

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = '#cecece';
    });

    square.addEventListener('mouseleave', () => {
      square.style.backgroundColor = 'unset';
    });

    container.append(square);
  }
}
