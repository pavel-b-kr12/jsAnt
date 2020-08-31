iniAudio();

ant.dir=0
 var dirlast=0.1;
dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(0);});}); //i%2*255


ant_func=function(){
for (var i = 0; i < 1000; i++) { //100000000
if(i%210==0){ //divider mean tones number
 var dir_d=dirlast-ant.dir;
 dirlast=ant.dir;
 osc.frequency.value=80+(dir_d%2000)*100%16000;
}
 

  if(dataset[ant.x][ant.y]<255) 
  {
	dataset[ant.x][ant.y]=255;
	ant.dir+=0.05;
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
	ant.dir-=.1;
  }
  
  switch(Math.floor(ant.dir))
  //switch(Math.floor(Math.abs(ant.dir)%4))
  {

	case 0:
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