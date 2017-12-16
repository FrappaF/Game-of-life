// Made by FrappaF
// Libraries from p5.js


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
let resolution = 10;
let fps = 10;
let countGen = 0;
let population = 0;
let c = 0;
let x;
let y;


function setup() {

  cnv = createCanvas(800,500);
  cnv.mousePressed(DrawMe);

  space = createDiv('');
  

  space1 = createDiv('Controls');
  space1.style("font-size", "20px");

  var btnStart = createElement("BUTTON");
  btnStart.html("START");
  btnStart.mousePressed(Start);

  var btnClear = createElement("BUTTON");
  btnClear.html("CLEAR");
  btnClear.mousePressed(Clear);

  var btnPause = createElement("BUTTON");
  btnPause.html("PAUSE");
  btnPause.mousePressed(Pause);

  var btnRandom = createElement("BUTTON");
  btnRandom.html("RANDOM");
  btnRandom.mousePressed(Random);

  space2 = createDiv('');

  count = createDiv('');

  space3 = createDiv('<br>');

  space4 = createDiv("Presets static" +"&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +"&emsp;"+ "Oscillators");
  space4.style('font-size', '20px')

  var btnBlock = createElement("BUTTON");
  btnBlock.html("BLOCK");
  btnBlock.mousePressed(Block);

  var btnBeehive = createElement("BUTTON");
  btnBeehive.html("BEEHIVE");
  btnBeehive.mousePressed(Beehive);

  var btnLoaf = createElement("BUTTON");
  btnLoaf.html("LOAF");
  btnLoaf.mousePressed(Loaf);

  var btnBoat = createElement("BUTTON");
  btnBoat.html("BOAT");
  btnBoat.mousePressed(Boat);

  var btnTub = createElement("BUTTON");
  btnTub.html("TUB");
  btnTub.mousePressed(Tub);

  var btnBlinker = createElement("BUTTON");
  btnBlinker.html("BLINKER");
  btnBlinker.mousePressed(Blinker);

  var btnToad = createElement("BUTTON");
  btnToad.html("TOAD");
  btnToad.mousePressed(Toad);

  var btnBeacon = createElement("BUTTON");
  btnBeacon.html("BEACON");
  btnBeacon.mousePressed(Beacon);

  var btnPulsar = createElement("BUTTON");
  btnPulsar.html("PULSAR");
  btnPulsar.mousePressed(Pulsar);

  colorMode(RGB);
  frameRate(fps);
  
  cols = width / resolution;
  rows = height / resolution;
  
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, c, 0);
    }
  }

  next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      next[i][j] = new Cell(i, j, c, floor(random(2)));
    }
  }

  noLoop();
}

function draw() {
  background(0,0,0);

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      var tempX = i * resolution;
      var tempY = j * resolution;
      stroke(150);
      fill(255);
      rect(tempX, tempY, resolution - 1, resolution - 1);
    }
  }

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
	        		grid[i][j].show(i * resolution, j * resolution, resolution - 1);
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

function Clear(){
	for (let i = 0; i < cols; i++){
		for(let j = 0; j < rows; j++){
			grid[i][j].val = 0;
		}
	}
  countGen = 0;
	noLoop();
  redraw();
	population = 0;
	
}

function Start(){
	loop();
}

function Pause(){
	noLoop();
}

function Random(){
	population = 0;
	countGen = 0;
	for (let i = 0; i < cols; i++) {
    	for (let j = 0; j < rows; j++) {
      		grid[i][j].val = floor(random(2));
      		if (grid[i][j].val == 1){
        		population += 1;
        	}
        }
  	}
  	redraw();
}

function DrawMe(){
  var xx = cols + 1;
  var yy = rows + 1;

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if ((mouseX >= (i * resolution)) && (mouseX < ((i * resolution) + resolution))){
          xx = i;
      }
      if ((mouseY >= (j * resolution)) && (mouseY < ((j * resolution) + resolution))){
        yy = j;
      }
      if ((xx != cols + 1) && (yy != rows + 1)){
        break;
      }
    }   
  }

    grid[xx][yy].val = 1;
    grid[xx][yy].show((xx * resolution), (yy * resolution), resolution -1);
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

