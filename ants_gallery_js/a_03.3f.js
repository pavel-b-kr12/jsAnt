dataset = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(i);});});
	

ant_func=function(){
	for (var i = 0; i < 1000; i++) { //100000000
  if(dataset[ant.x][ant.y]==0) 
  {
	dataset[ant.x][ant.y]=255;
	ant.dir+=0.03;
  }
  else
/*
  if(dataset[ant.x][ant.y]==122) 
  {
	dataset[ant.x][ant.y]=255;
	//ant.dir--;
  }
  else*/


  {
  
	dataset[ant.x][ant.y]=0;
	ant.dir-=0.01;
  }
  
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
 
  if(ant.x>999) ant.x=0;
  else if(ant.x<0) ant.x=999;
  
    if(ant.y>999) ant.y=0;
  else if(ant.y<0) ant.y=999;

  
}
}