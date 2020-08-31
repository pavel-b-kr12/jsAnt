    var chartSize = 400;
    var dataSize = 400;
initAnt();
iniAudio();

var op_per_frame=1;
var iiAdd_each_op=1; //e.g. for increment color by time left
var ii=0;
var ii_counter=0;

var fill_type=1;

var datasetColor = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return 0;});});
var dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return fillInit( d,  i);});});

ant_func=function(){
for (var i = 0; i < op_per_frame; i++,ii_counter++) { //100000000
	if(ii_counter==iiAdd_each_op)
	{
		ii_counter=0;
		ii++; 
		//if(ii>255) ii=0;

		osc.frequency.value=80+ant.dir*256; //Math.sin(ant.dir)*256;
	}


  if(dataset[ant.x][ant.y]<255) 
  {
	dataset[ant.x][ant.y]++;
               datasetColor[ant.x][ant.y]=ii;
	ant.dir-=0.1;
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
	ant.dir+=1;
  }
  
  //switch(Math.floor(ant.dir%4))
  //switch(Math.floor(ant.dir))
  switch(Math.floor(ant.dir))
  {

	case 0:
	ant.x++;
	break;
	
		case 4: 
		ant.dir-=4; //#  //0
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
	ant.dir+=4;
	ant.y--;
	break;
	
 
  
  }
 
  if(ant.x>ww-1) ant.x=0;
  else if(ant.x<0) ant.x=ww-1;
  
    if(ant.y>hh-1) ant.y=0;
  else if(ant.y<0) ant.y=hh-1;

  
}
	

colorizeC_li();
}
colorize=function(){}