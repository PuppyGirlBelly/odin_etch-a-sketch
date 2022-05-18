const container = document.createElement('div');
container.className = 'container';

for (y = 0; y < 16; y++) {
  let row = document.createElement('div');
  row.id = `row-${y}`;
  row.className = 'row';
  row.style.border = '1px solid red';
  container.append(row);
  for (x = 0; x < 16; x++) {
    let square = document.createElement('div');
    square.id = `square-${x}-${y}`;
    square.className = 'square';
    square.style.border = '1px solid red';
    container.append(square);
  }
}
document.querySelector('body').append(container);
