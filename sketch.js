function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let next;
let cols;
let rows;
let resolution = 4;
let fps = 10;
let countGen = 0;
let population = 0;
let c = 255;

function setup() {

  colorMode(RGB);
  frameRate(fps);
  
  count = createDiv('');
  
  cnv = createCanvas(1700,800);

  cols = width / resolution;
  rows = height / resolution;
  
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, c, floor(random(2)));
      if (grid[i][j].val == 1){
        population += 1;

      }
    }
  }
  next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      next[i][j] = new Cell(i, j, c, floor(random(2)));
    }
  }

}

function draw() {
  background(0,0,0);
   
   for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j].val == 1) {
      	grid[i][j].show(x, y, resolution - 1);  
      }  
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      next[i][j].val = grid[i][j].val;
    }
      
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j].val;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        	next[i][j].val = 1;
        	population += 1;
      	} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        	next[i][j].val = 0;
        	population = (population - 1);
      	} else {
	        next[i][j].val = state;
	        if (grid[i][j].val != 0){
        		grid[i][j].show(i * resolution, j * resolution, resolution - 1, "blue");
    		}
      	}
    }
  }
  
  countGen += 1;
  count.html("Year  "  + countGen +"&emsp;" +"&emsp;"+ "Population " + population);
   for (let i = 0; i < cols; i++) {
    	for (let j = 0; j < rows; j++) {
      		grid[i][j].val = next[i][j].val;
    	}
	}
}


function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row].val;
    }
  }
  sum -= grid[x][y].val;
  return sum;
}
