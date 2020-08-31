function initGf(){
//-------1st
	canvas=document.createElement('canvas');
	canvas.width=chartSize
	canvas.height=chartSize
	document.body.appendChild(canvas);
     //canvas = d3.select('body')
        //.append('canvas')
        //.style({width: chartSize + 'px', height: chartSize + 'px'}) //position: 'absolute', 
        //.attr({width: dataSize, height: dataSize})
        //.node();
	canvas.id='canvL';
	
	

     canvasWidth  = canvas.width;
     canvasHeight = canvas.height;
											//ctx.scale(2,2);
     ctx = canvas.getContext('2d');
     imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

     buf = new ArrayBuffer(imageData.data.length);
     buf8 = new Uint8ClampedArray(buf);
     data = new Uint32Array(buf);
//---------2nd
	canvasC=document.createElement('canvas');
	canvasC.width=chartSize
	canvasC.height=chartSize
	document.body.appendChild(canvasC);
	//var canvasC = d3.select('body')
	//.append('canvas')
	//.style({ width: chartSize + 'px', height: chartSize + 'px'})
	//.attr({width: dataSize, height: dataSize})
	//.node();

											//ctx.scale(2,2);
     ctxC = canvasC.getContext('2d');
     imageDataC = ctxC.getImageData(0, 0, canvasWidth, canvasHeight);

     bufC = new ArrayBuffer(imageDataC.data.length);
     buf8C = new Uint8ClampedArray(bufC);
     dataC = new Uint32Array(bufC);
//--------
     ant = {
			dir : 0,
				get Dir() { return this.dir; },
				set Dir(val) { this.dir=prop.bInt_?~~val:val; }, 
			x : dataSizeCenter, 
			y: dataSizeCenter,
			
			centerXY: function ()
			{
			 this.x=~~dataSizeCenter;
			 this.y=~~dataSizeCenter;
			},
				
			xt:0,	//prev pos
			yt:0,
			//dxy:0 //speed on this segment
			speed:0
		}



 ii=0;
 jj=0;


 context = new AudioContext();
 osc = context.createOscillator();
  g = context.createGain();
osc.connect(g);
g.connect(context.destination);
osc.start(0);
}



function colorize0()
{
	for (var y = 0; y < canvasHeight; ++y) {
		for (var x = 0; x < canvasWidth; ++x) {
			var value = dataset[y][x];
			data[y * canvasWidth + x] =
			(255   << 24) |value*255;
			/*
				(255   << 24) |	// alpha

				(value/2 << 16) |	// blue
				(value <<  8) |	// green
				255;			// red
				*/
		}
	}
}

function colorize3()
{
	for (var y = 0; y < canvasHeight; ++y) {
		for (var x = 0; x < canvasWidth; ++x) {
			//var value = dataset[y][x];
			//var value = datasetColor[y][x];
			var value =  datasetColor[y][x];
			//var value = dataset[y][x]*datasetColor[y][x];

			data[y * canvasWidth + x] =
			//(255   << 24) |value*155;
			
				(255   << 24) |	// alpha

				((value+188)%256 << 16) |	// blue
				((value+88)%256 <<  8) |	// green
				value%256;			// red
				
		}
	}
}
function colorizeC_li(){
	for (var y = 0; y < canvasHeight; ++y) {
		for (var x = 0; x < canvasWidth; ++x) {
			var value = dataset[y][x];
			data[y * canvasWidth + x] =
			  (255   << 24) |				// alpha
				((value+188)%256 << 16) |	// B
				((value+88)%256 <<  8) |	// G
				value%256;					// R
				

			 var valueC = datasetColor[y][x];
			dataC[y * canvasWidth + x] =
				(255   << 24) |
				((valueC+188)%256 << 16) |
				((valueC+88)%256 <<  8) |
				valueC%256; 
				
		}
	}
}
colorize=colorize0;