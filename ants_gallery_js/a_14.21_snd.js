chartSize = 2000;
dataSize = 2000;
opsFerFrame=10
dt=1

iniAudio();

ant.dir=0;
dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(0);});}); //i%2*255
ant_func=function(){
 var t0=performance.now();
for (var i = 0; i < 1000; i++) { //100000000
 osc.frequency.value=80+ant.dir*256;

  if(dataset[ant.x][ant.y]<255) 
  {
	dataset[ant.x][ant.y]=255;
	ant.dir+=0.02;
  }
  else

 /* if(dataset[ant.x][ant.y]==122) 
  {
	dataset[ant.x][ant.y]=255;
	ant.dir-=0.13;
  }

else*/

  {
  
	dataset[ant.x][ant.y]=0;
	ant.dir-=.8;
  }
  
  //switch(Math.floor(ant.dir))
  switch(Math.floor(ant.dir))
  {

	case 0:
	ant.x++;
	break;
		case 4:
		ant.dir=0;
	ant.x++;
	break;
	
	
	case 1:
	ant.y++;
	break;
	
	case 2:
	ant.x--;
	break;
	
	
	case 3:
	ant.y--;
	break;
	  	case -1:
	ant.dir=3;
	ant.y--;
	break;
	

  
  }
 
  if(ant.x>chartSize-1) ant.x=0;
  else if(ant.x<0) ant.x=chartSize-1;
  
    if(ant.y>chartSize-1) ant.y=0;
  else if(ant.y<0) ant.y=chartSize-1;

  
}

	

	for (var y = 0; y < canvasHeight; ++y) {
        for (var x = 0; x < canvasWidth; ++x) {
            var value = dataset[y][x];
            data[y * canvasWidth + x] =
			(255   << 24) |value*255;
			/*
                (255   << 24) |    // alpha

                (value/2 << 16) |    // blue
                (value <<  8) |    // green
                255;            // red
				*/
        }
    }
}
colorize=function(){}