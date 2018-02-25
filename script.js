const container = document.querySelector('.container');
const gridSize = 16;
const colorButton = document.querySelector('#rainbow');
const sizeButton = document.querySelector('#gridpx');
const clearButton = document.querySelector('#cleargrid');

function playGrid(gridSize) {
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

/*
//function to change 'mouseover' color from black to random
colorButton.addEventListener('click', (e) => {

});
*/

//function to reset color of grid to white
clearButton.addEventListener('click', (e) => {
	let filledSquare = document.querySelectorAll('.grid-item.colored');
	for (i = 0; i < filledSquare.length; i++) {
		filledSquare[i].classList.remove('colored');
	}
});

//function that changes size of grid from default
sizeButton.addEventListener('click', (e) => {
	let gridSize = prompt("Please enter a number between 1 and 100", "");
	if (gridSize == null | gridSize == "") {
	//	don't do anything if blank or null
	} else if (gridSize > 100) {
		alert("Invalid entry. Please try again.");
	} else {
		playGrid(gridSize);
	}		
});

playGrid(gridSize);