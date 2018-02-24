const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
const squares = document.createElement('div');
squares.classList.add('grid-item');
squares.addEventListener('mouseover', (event) => {
	event.target.classList.add('colored');
	});

container.appendChild(squares);
}
/*
function boxColor() {
	const colorButton = document.querySelector('#rainbow');
	if (
	colorButton.addEventListener('click', (e) => {

	});
}	
*/
function clearGrid(e) {
	const clearButton = document.querySelector('#cleargrid');
	clearButton.addEventListener('click', (e) => {
		squares.target.classList.remove('colored');
	});
}

function setGridSize() {
	const sizeButton = document.querySelector('#gridpx');
	sizeButton.addEventListener('click', (e) => {

	});
}