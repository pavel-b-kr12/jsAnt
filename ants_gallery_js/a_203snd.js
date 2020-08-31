    var chartSize = 500;
    var dataSize = 500;
	initAnt();
dt=1;
    var datasetColor = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(Math.random()*255);});});

var ii=0;
var jj=0;

iniAudio();

dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(i%2*255);});}); //i%2 //i%2*255
ant_func=function(){
for (var i = 0,ic=0; i < 1000; i++,ic++) { //100000000

//if(i%222222==0)
if(ic==100)
{
ic=0;
ii++; //if(ii>255) ii=0;

 osc.frequency.value=80+ant.dir*256;
}




  if(dataset[ant.x][ant.y]<255) 
  {
	dataset[ant.x][ant.y]++;
               datasetColor[ant.x][ant.y]=ii;
	ant.dir+=0.01;
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
	ant.dir+=0.1;
  }
  
  //switch(Math.floor(ant.dir))
  switch(Math.floor(ant.dir))
  {

	case 0:
	ant.x++;
	break;
		case 4: 
		ant.dir=0; //# -=4 //0
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
	

colorizeC_li();

}
colorize=function(){}