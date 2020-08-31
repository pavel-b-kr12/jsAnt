var chartSize = 1000;
var dataSize = 1000;

    var dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(Math.random()*255);});});
    var datasetColor = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(Math.random()*255);});});



var ii=0;
var jj=0;

function hueToRGB( v1,  v2,  vH) {
	if (vH < 0.0) vH+= 1.0;
	if (vH > 1.0) vH -= 1.0;
	if ((6.0 * vH) < 1.0) return (v1 + (v2 - v1) * 6.0 * vH);
	if ((2.0 * vH) < 1.0) return (v2);
	if ((3.0 * vH) < 2.0) return (v1 + (v2 - v1) * ((2.0 / 3.0) - vH) * 6.0);
	return v1*255;
}



dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(i%2);});}); //i%2*255


ant_func=function(){
for (var i = 0; i < 1000000; i++) { //100000000

//if(i%222222==0)
if(i%2222==0)
{
ii++; if(ii>255*255) ii=0;
}

  if(dataset[ant.x][ant.y]<255)  //!!debug index out of
  {
	dataset[ant.x][ant.y]++;
               datasetColor[ant.x][ant.y]=ii;
	ant.dir+=0.2;
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
             	datasetColor[ant.x][ant.y]=0;
	ant.dir-=0.3;
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
}

colorize = function(){

	

	for (var y = 0; y < canvasHeight; ++y) {
        for (var x = 0; x < canvasWidth; ++x) {
            //var value = dataset[y][x];
            //var value = datasetColor[y][x];
            var value =  datasetColor[y][x];
            //var value = dataset[y][x]*datasetColor[y][x];

            data[y * canvasWidth + x] =
			//(255   << 24) |value*155;
			
                (255   << 24) |    // alpha

                ((value+188)%256 << 16) |    // blue
                ((value+88)%256 <<  8) |    // green
                value%256;            // red
				
        }
    }
}
