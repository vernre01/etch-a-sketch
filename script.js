const container = document.querySelector('.container');
const gridSize = 16;
let counter = 1;
let rainbowActive = false;
const colorButton = document.querySelector('#rainbow');
const sizeButton = document.querySelector('#gridpx');
const clearButton = document.querySelector('#cleargrid');

//function to set up the grid for Etch-a-Sketch play
function playGrid(gridSize) {
	for (i = 0; i < (gridSize*gridSize); i++) {
		const squares = document.createElement('div');
		squares.classList.add('grid-item');
		container.style.cssText = 'grid-template-columns: repeat(' + gridSize + ', auto)';
		squares.style.height = 480/gridSize + 'px';
		squares.style.width = 480/gridSize + 'px';
		colorPicker(squares);
		container.appendChild(squares);
	}
}

//function to change 'mouseover' color from black to random
function colorPicker(squares) {
	squares.addEventListener('mouseover', (event) => {
		if (rainbowActive) {
			squares.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
		} else {
			squares.style.backgroundColor = '';
			squares.classList.add('black');
		}
	});
}

//Sets the function of the Rainbow Button
colorButton.addEventListener('click', (e) => {
	counter++;
	if(counter % 2 === 0) {
		rainbowActive = true;
	} else {
		rainbowActive = false;
	}
});


//Sets the function of the Reset Button
clearButton.addEventListener('click', clearColors);

//function to reset color of grid to white
function clearColors() {
	let filledSquare = document.querySelectorAll('.grid-item, .grid-item.black');
	for (i = 0; i < filledSquare.length; i++) {
		filledSquare[i].classList.remove('black');
		filledSquare[i].style.cssText = "";
	}
}

//function to clear out old nodes
function removeNodes() {
	let oldBoxes = document.querySelectorAll(".grid-item, .grid-item.black").forEach(e => e.parentNode.removeChild(e));
}

//function that changes size of grid from default
sizeButton.addEventListener('click', (e) => {
	let gridSize = prompt("Please enter a number between 1 and 100", "");
	if (gridSize == null | gridSize == "") {
	//	don't do anything if blank or null
	} else if (gridSize > 100) {
		alert("Invalid entry. Please try again.");
	} else {
		removeNodes();
		playGrid(gridSize);
	}		
});

playGrid(gridSize);