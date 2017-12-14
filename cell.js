function Cell(posx, posy, c, val) {

  
  this.val = val;

  this.posx = posx;
  this.posy = posy;

  this.c = c;

  this.clicked = function() {
    if (this.val == 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function(x, y, r, color) {
    var tempColor;
    if(color){
        tempColor = color;
    }
    else{
      tempColor = this.c;
    }
    noStroke();
    fill(tempColor);
    rect(x, y, r, r);
  }

}
