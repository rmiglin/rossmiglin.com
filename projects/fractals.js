function drawFractal(){
  var myCanvas = document.createElement("canvas")
  myCanvas.width = screen.width;
  myCanvas.height = screen.height;
  document.body.appendChild(myCanvas);
  var ctx = myCanvas.getContext("2d");

  var magnificationFactor = 2900;
  var panX = -0.15;
  var panY = 0.5;
  for(var x = 0; x < myCanvas.width; x++) {
    for(var y = 0; y < myCanvas.height; y++) {
      var belongsToSet = checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX,
                                                        y/magnificationFactor - panY);
      if(belongsToSet == 0) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x,y,1,1);
      } else {
        ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
        ctx.fillRect(x,y,1,1);
      }
    }
  }
}
drawFractal()

function checkIfBelongsToMandelbrotSet(x, y){
  var realComponentOfResult = x;
  var imaginaryComponentOfResult = y;
  var maxIterations = 100;
  for(var i = 0; i < 100; i++){
    var tempRealComponent = realComponentOfResult * realComponentOfResult
                            - imaginaryComponentOfResult * imaginaryComponentOfResult
                            + x;
    var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                            + y;
    realComponentOfResult = tempRealComponent;
    imaginaryComponentOfResult = tempImaginaryComponent;
  if(realComponentOfResult * imaginaryComponentOfResult > 5)
    return (i/maxIterations * 100);
  }
  return 0;

}
