    var canvas = d3.select('body')
        .append('canvas')
        .style({width: chartSize + 'px', height: chartSize + 'px'}) //position: 'absolute', 
        .attr({width: dataSize, height: dataSize})
        .node();

    var canvasWidth  = canvas.width;
    var canvasHeight = canvas.height;
											//ctx.scale(2,2);
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    var buf = new ArrayBuffer(imageData.data.length);
    var buf8 = new Uint8ClampedArray(buf);
    var data = new Uint32Array(buf);
	
	
	
	    var canvasC = d3.select('body')
        .append('canvas')
        .style({ width: chartSize + 'px', height: chartSize + 'px'})
        .attr({width: dataSize, height: dataSize})
        .node();

											//ctx.scale(2,2);
    var ctxC = canvasC.getContext('2d');
    var imageDataC = ctxC.getImageData(0, 0, canvasWidth, canvasHeight);

    var bufC = new ArrayBuffer(imageDataC.data.length);
    var buf8C = new Uint8ClampedArray(bufC);
    var dataC = new Uint32Array(bufC);


	
var     ant = {
        dir : 0,
        x : chartSize/2, 
        y: chartSize/2
		}
		
	

var ii=0;
var jj=0;


var context = new AudioContext();
var osc = context.createOscillator();
var  g = context.createGain();
osc.connect(g);
g.connect(context.destination);
osc.start(0);