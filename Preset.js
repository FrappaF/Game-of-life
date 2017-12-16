function Block() {

	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution) ,(7 * resolution), resolution - 1);
	grid[6][7].val = 1;
	grid[6][7].show((6 * resolution) ,(7 * resolution), resolution - 1);
	grid[7][6].val = 1;
	grid[7][6].show((7 * resolution) ,(6 * resolution), resolution - 1);
	grid[6][6].val = 1;
	grid[6][6].show((6 * resolution) ,(6 * resolution), resolution - 1);

    population = population + 4;

	redraw();
}

function Beehive(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution), (7 * resolution), resolution - 1);
	grid[8][7].val = 1;
	grid[8][7].show((8 * resolution), (7 * resolution), resolution - 1);
	grid[9][8].val = 1;
	grid[9][8].show((9 * resolution), (8 * resolution), resolution - 1);
	grid[8][9].val = 1;
	grid[8][9].show((8 * resolution), (9 * resolution), resolution - 1);
	grid[7][9].val = 1;
	grid[7][9].show((7 * resolution), (9 * resolution), resolution - 1);
	grid[6][8].val = 1;
	grid[6][8].show((6 * resolution), (8 * resolution), resolution - 1);
   
	population = population + 6;

   	redraw();
}

function Loaf(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution), (7 * resolution), resolution - 1);
	grid[8][7].val = 1;
	grid[8][7].show((8 * resolution), (7 * resolution), resolution - 1);
	grid[9][8].val = 1;
	grid[9][8].show((9 * resolution), (8 * resolution), resolution - 1);
	grid[9][9].val = 1;
	grid[9][9].show((9 * resolution), (9 * resolution), resolution - 1);
	grid[8][10].val = 1;
	grid[8][10].show((8 * resolution), (10 * resolution), resolution - 1);
	grid[7][9].val = 1;
	grid[7][9].show((7 * resolution), (9 * resolution), resolution - 1);
	grid[6][8].val = 1;
	grid[6][8].show((6 * resolution), (8 * resolution), resolution - 1);

	population = population + 7;

	redraw();
}

function Boat(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution), (7 * resolution), resolution - 1);
	grid[8][7].val = 1;
	grid[8][7].show((8 * resolution), (7 * resolution), resolution - 1);
	grid[9][8].val = 1;
	grid[9][8].show((9 * resolution), (8 * resolution), resolution - 1);
	grid[8][9].val = 1;
	grid[8][9].show((8 * resolution), (9 * resolution), resolution - 1);
	grid[7][8].val = 1;
	grid[7][8].show((7 * resolution), (8 * resolution), resolution - 1);

	population = population + 5;

	redraw();	
}

function Tub(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution), (7 * resolution), resolution - 1);
	grid[8][8].val = 1;
	grid[8][8].show((8 * resolution), (8 * resolution), resolution - 1);
	grid[7][9].val = 1;
	grid[7][9].show((7 * resolution), (9 * resolution), resolution - 1);
	grid[6][8].val = 1;
	grid[6][8].show((6 * resolution), (8 * resolution), resolution - 1);

	population = population + 4;

	redraw();
}

function Blinker(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution), (7 * resolution), resolution - 1);
	grid[7][8].val = 1;
	grid[7][8].show((7 * resolution), (8 * resolution), resolution - 1);
	grid[7][9].val = 1;
	grid[7][9].show((7 * resolution), (9 * resolution), resolution - 1);

	population = population + 3;

	redraw();
}

function Toad(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution), (7 * resolution), resolution - 1);
	grid[8][7].val = 1;
	grid[8][7].show((8 * resolution), (7 * resolution), resolution - 1);
	grid[9][7].val = 1;
	grid[9][7].show((9 * resolution), (7 * resolution), resolution - 1);
	grid[6][8].val = 1;
	grid[6][8].show((6 * resolution), (8 * resolution), resolution - 1);
	grid[7][8].val = 1;
	grid[7][8].show((7 * resolution), (8 * resolution), resolution - 1);
	grid[8][8].val = 1;
	grid[8][8].show((8 * resolution), (8 * resolution), resolution - 1);

	population = population + 6;

	redraw();
}

function Beacon(){
	Clear();

	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution) ,(7 * resolution), resolution - 1);
	grid[6][7].val = 1;
	grid[6][7].show((6 * resolution) ,(7 * resolution), resolution - 1);
	grid[7][6].val = 1;
	grid[7][6].show((7 * resolution) ,(6 * resolution), resolution - 1);
	grid[6][6].val = 1;
	grid[6][6].show((6 * resolution) ,(6 * resolution), resolution - 1);
	grid[8][8].val = 1;
	grid[8][8].show((8 * resolution) ,(8 * resolution), resolution - 1);
	grid[8][9].val = 1;
	grid[8][9].show((8 * resolution) ,(9 * resolution), resolution - 1);
	grid[9][9].val = 1;
	grid[9][9].show((9 * resolution) ,(9 * resolution), resolution - 1);
	grid[9][8].val = 1;
	grid[9][8].show((9 * resolution) ,(8 * resolution), resolution - 1);

	population = population + 8;

	redraw();
}

function Pulsar(){
	Clear();

//  first block
	grid[7][7].val = 1;
	grid[7][7].show((7 * resolution) ,(7 * resolution), resolution - 1);
	grid[8][7].val = 1;
	grid[8][7].show((8 * resolution) ,(7 * resolution), resolution - 1);
	grid[9][7].val = 1;
	grid[9][7].show((9 * resolution) ,(7 * resolution), resolution - 1);

	grid[10][9].val = 1;
	grid[10][9].show((10 * resolution) ,(9 * resolution), resolution - 1);
	grid[10][10].val = 1;
	grid[10][10].show((10 * resolution) ,(10 * resolution), resolution - 1);
	grid[10][11].val = 1;
	grid[10][11].show((10 * resolution) ,(11 * resolution), resolution - 1);

	grid[7][12].val = 1;
	grid[7][12].show((7 * resolution) ,(12 * resolution), resolution - 1);
	grid[8][12].val = 1;
	grid[8][12].show((8 * resolution) ,(12 * resolution), resolution - 1);
	grid[9][12].val = 1;
	grid[9][12].show((9 * resolution) ,(12 * resolution), resolution - 1);

	grid[5][9].val = 1;
	grid[5][9].show((5 * resolution) ,(9 * resolution), resolution - 1);
	grid[5][10].val = 1;
	grid[5][10].show((5 * resolution) ,(10 * resolution), resolution - 1);
	grid[5][11].val = 1;
	grid[5][11].show((5 * resolution) ,(11 * resolution), resolution - 1);

//  second block
	grid[13][7].val = 1;
	grid[13][7].show((13 * resolution) ,(7 * resolution), resolution - 1);
	grid[14][7].val = 1;
	grid[14][7].show((14 * resolution) ,(7 * resolution), resolution - 1);
	grid[15][7].val = 1;
	grid[15][7].show((15 * resolution) ,(7 * resolution), resolution - 1);

	grid[17][9].val = 1;
	grid[17][9].show((17 * resolution) ,(9 * resolution), resolution - 1);
	grid[17][10].val = 1;
	grid[17][10].show((17 * resolution) ,(10 * resolution), resolution - 1);
	grid[17][11].val = 1;
	grid[17][11].show((17 * resolution) ,(11 * resolution), resolution - 1);

	grid[13][12].val = 1;
	grid[13][12].show((13 * resolution) ,(12 * resolution), resolution - 1);
	grid[14][12].val = 1;
	grid[14][12].show((14 * resolution) ,(12 * resolution), resolution - 1);
	grid[15][12].val = 1;
	grid[15][12].show((15 * resolution) ,(12 * resolution), resolution - 1);

	grid[12][9].val = 1;
	grid[12][9].show((12 * resolution) ,(9 * resolution), resolution - 1);
	grid[12][10].val = 1;
	grid[12][10].show((12 * resolution) ,(10 * resolution), resolution - 1);
	grid[12][11].val = 1;
	grid[12][11].show((12 * resolution) ,(11 * resolution), resolution - 1);

//  third block
	grid[7][14].val = 1;
	grid[7][14].show((7 * resolution) ,(14 * resolution), resolution - 1);
	grid[8][14].val = 1;
	grid[8][14].show((8 * resolution) ,(14 * resolution), resolution - 1);
	grid[9][14].val = 1;
	grid[9][14].show((9 * resolution) ,(14 * resolution), resolution - 1);

	grid[10][15].val = 1;
	grid[10][15].show((10 * resolution) ,(15 * resolution), resolution - 1);
	grid[10][16].val = 1;
	grid[10][16].show((10 * resolution) ,(16 * resolution), resolution - 1);
	grid[10][17].val = 1;
	grid[10][17].show((10 * resolution) ,(17 * resolution), resolution - 1);

	grid[7][19].val = 1;
	grid[7][19].show((7 * resolution) ,(19 * resolution), resolution - 1);
	grid[8][19].val = 1;
	grid[8][19].show((8 * resolution) ,(19 * resolution), resolution - 1);
	grid[9][19].val = 1;
	grid[9][19].show((9 * resolution) ,(19 * resolution), resolution - 1);

	grid[5][15].val = 1;
	grid[5][15].show((5 * resolution) ,(9 * resolution), resolution - 1);
	grid[5][16].val = 1;
	grid[5][16].show((5 * resolution) ,(17 * resolution), resolution - 1);
	grid[5][17].val = 1;
	grid[5][17].show((5 * resolution) ,(17 * resolution), resolution - 1);

//  fourth	block
	grid[13][14].val = 1;
	grid[13][14].show((13 * resolution) ,(14 * resolution), resolution - 1);
	grid[14][14].val = 1;
	grid[14][14].show((14 * resolution) ,(14 * resolution), resolution - 1);
	grid[15][14].val = 1;
	grid[15][14].show((15 * resolution) ,(14 * resolution), resolution - 1);

	grid[17][15].val = 1;
	grid[17][15].show((17 * resolution) ,(9 * resolution), resolution - 1);
	grid[17][16].val = 1;
	grid[17][16].show((17 * resolution) ,(16 * resolution), resolution - 1);
	grid[17][17].val = 1;
	grid[17][17].show((17 * resolution) ,(17 * resolution), resolution - 1);

	grid[13][19].val = 1;
	grid[13][19].show((13 * resolution) ,(19 * resolution), resolution - 1);
	grid[14][19].val = 1;
	grid[14][19].show((14 * resolution) ,(19 * resolution), resolution - 1);
	grid[15][19].val = 1;
	grid[15][19].show((15 * resolution) ,(19 * resolution), resolution - 1);

	grid[12][15].val = 1;
	grid[12][15].show((12 * resolution) ,(15 * resolution), resolution - 1);
	grid[12][16].val = 1;
	grid[12][16].show((12 * resolution) ,(16 * resolution), resolution - 1);
	grid[12][17].val = 1;
	grid[12][17].show((12 * resolution) ,(17 * resolution), resolution - 1);

	population = population + 48;

	redraw();
}