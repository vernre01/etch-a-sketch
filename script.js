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

const filledSquare = document.querySelectorAll('.grid-item colored');

//function clearGrid() {
	const clearButton = document.querySelector('#cleargrid');
	clearButton.addEventListener('click', (e) => {
		filledSquare.classList.remove('colored');
	});
//}

//function setGridSize(e) {
	const sizeButton = document.querySelector('#gridpx');
	sizeButton.addEventListener('click', (e) => {
		let gridSize = prompt("Please enter a number between 1 and 100", "");
		if (gridSize == null | gridSize == "") {
		//	alert("okay.")
		} else if (gridSize > 100) {
			alert("Invalid entry. Please try again.");
		} else {
			for (i = 0; i < (gridSize*gridSize); i++) {
				const squares = document.createElement('div');
				squares.classList.add('grid-item');
				container.style.cssText = 'grid-template-columns: repeat(' + gridSize + ', auto)';
				squares.style.cssText = 'height: ' + 480/gridSize + 'px; width:' + 480/gridSize + 'px';
				squares.addEventListener('mouseover', (event) => {
					event.target.classList.add('colored');
				});

				container.appendChild(squares);
			}
		}
	});
//}