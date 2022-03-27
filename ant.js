//https://en.wikipedia.org/wiki/Turmite
//https://en.wikipedia.org/wiki/Langton%27s_ant

antFF=
{
RL:function(o,pos)
{
	switch (field[pos])
	{
		case 0: field[pos]=255; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		//case 127: field[pos]=255; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		default:
		case 255: field[pos]=0; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
	}
}


,
RL_on_arrHist:function(o,pos)
{
	switch (arrHist[pos]%2)
	{
		case 0: field[pos]=255; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		default:
		case 255: field[pos]=0; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
	}
},
RL_on_arrVisits:function(o,pos)
{
	switch (arrHist[pos]%2)
	{
		case 0: field[pos]=255; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		default:
		case 255: field[pos]=0; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
	}
},
RL_on_arrVisits1:function(o,pos)
{
		if(arrHist[pos]%256<128)
		{
			field[pos]=255; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++;
		}
		else
		{
			field[pos]=0; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--;
		}
}



, Run1:function(o,pos)
{
	switch (field[pos])
	{
		case 0: field[pos]=88; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 88: field[pos]=160; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 160: field[pos]=255; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
		default:
		case 255: field[pos]=0; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
	}
}
		//case 1: field[pos]=2; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		//case 2: field[pos]=3; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
, RunLRRRRRLLR:function(o,pos)
{
	switch (field[pos])
	{
		case 0: field[pos]=33; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
		case 33: field[pos]=66; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 66: field[pos]=99; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 99: field[pos]=133; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 133: field[pos]=166; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 166: field[pos]=188; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
		case 188: field[pos]=222; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
		case 222: field[pos]=255; o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = 3; else o.dir--; break;
		default:
		case 255: field[pos]=0; o.dirAbs++; o.rotSpeed+=4; if (o.dir == 3) o.dir = 0; else o.dir++; break;
	}
}







, RRLLLRLLLRRR:function(o,pos)
{
	switch (field[pos])
	{
		case 0: field[pos]=22; r(o); break;
		case 22: field[pos]=44; r(o); break;
		case 44: field[pos]=66; l(o); break;
		case 66: field[pos]=88; l(o); break;
		case 88: field[pos]=111; l(o); break;
		case 111: field[pos]=133; r(o); break;
		case 133: field[pos]=144; l(o); break;
		case 144: field[pos]=166; l(o); break;
		case 166: field[pos]=188; l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}

, L2NNL1L2L1:function(o,pos) //nwp
{
	switch (field[pos])
	{
		case 0: field[pos]=44; l(o);l(o); break;
		case 44: field[pos]=88;  break;
		case 88: field[pos]=122;  break;
		case 122: field[pos]=166; l(o); break;
		case 166: field[pos]=255; l(o);l(o); break;
		default:
		case 255: field[pos]=0;l(o); break;
	}
}


, colony123123:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=22; r(o);r(o); break;
		case 22: field[pos]=44; r(o); break;
		case 44: field[pos]=66; l(o); break;
		case 66: field[pos]=88; l(o); break;
		case 88: field[pos]=111; l(o); break;
		case 111: field[pos]=133; r(o); break;
		case 133: field[pos]=144; l(o); break;
		case 144: field[pos]=166; l(o); break;
		case 166: field[pos]=188; l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}


, quad1231:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=22; r(o); break;
		case 22: field[pos]=88; r(o); break;
		case 88: field[pos]=111; r(o); break;
		case 111: field[pos]=166; r(o); break;
		case 166: field[pos]=188; l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}
, still_cross:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=22; r(o); break;
		case 22: field[pos]=88; r(o); break;
		case 88: field[pos]=111; r(o); break;
		case 111: field[pos]=166; r(o); break;
		case 166: field[pos]=188; l(o);l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}
, still_cross2313:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=22; r(o); break;
		case 22: field[pos]=111; r(o); break;
		case 111: field[pos]=166; r(o); break;
		case 166: field[pos]=188; l(o);l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}
, t123123243131:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=22; r(o); break;
		case 22: field[pos]=111;  break;
		case 111: field[pos]=166; r(o); break;
		case 166: field[pos]=188; l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}
, snall234234:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=44; r(o); break;
		case 44: field[pos]=166; l(o);break;
		case 166: field[pos]=188; l(o); break;
		case 188: field[pos]=222; r(o); break;
		case 222: field[pos]=155; r(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}
, t123321:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=55; l(o);break;
		case 55: field[pos]=144; r(o); break;
		case 144: field[pos]=255; l(o); break;
		default:
		case 255: field[pos]=0;r(o); break;
	}
}
, still_line2p_rombi:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=55; l(o);break;
		case 55: field[pos]++; r(o); break;
		case 66: field[pos]=255; r(o); break;
		//default:
		case 255: field[pos]=0;r(o); break;
	}
}
, still_line2p:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=55; l(o);break;
		case 55: field[pos]++; l(o);l(o); break;
		case 77: field[pos]=255; r(o); break;
		//default:
		case 255: field[pos]=0;r(o); break;
	}
}
, t123132123131:function(o,pos) //diz as bact  выделить контур
{
	switch (field[pos])
	{
		case 0: field[pos]=55; l(o);break;
		case 55: field[pos]++; r(o);  break;
		case 77: field[pos]=255; l(o);  break;
		default: field[pos]++; break;
		case 255: field[pos]=0;r(o); break;
	}
},

	RL_more_less:function(o,pos)
	{
		if (field[pos]<127)
		{
			field[pos]+=1; r(o);
		}
		else
			field[pos]-=1; l(o);
	},
	RL_hist:function(o,pos)
	{
		if (arrVisits[pos]%2==0) r(o);
		else l(o);

	}

}

antFF_f=  //float calc for ant_f
{
	RL:function(o,pos)
	{
		if (arrVisits[pos]%2==0) r(o);
		else l();
		
		/*
		if (field[pos]<127)
		{
			field[pos]+=1; r(o);
		}
		else
			field[pos]-=1; l(o);
		*/
	}
}

var dirM=3; //diz 15x5 still_cross2313
// function dirM_set(v)
// {
	// dirM=v;
	// dirE=v+1;
// }
var dirM_L=3;
function r(o)
{
	o.dirAbs++; o.rotSpeed+=4; if (o.dir == dirM) o.dir = 0; else o.dir++;
}
function l(o)
{
	o.dirAbs--; o.rotSpeed-=4; if (o.dir == 0) o.dir = dirM_L; else o.dir--;
}



var ant = {
			dir : 0,
			x : xc, 
			y: yc,
			
			centerXY: function ()
			{
			 this.x=~~xc;
			 this.y=~~yc;
			},
				
			xt:0,	//prev pos
			yt:0,
			//dxy:0 //speed on this segment
			step_i:0,
			step_i_real:0,//need because step_i can be modifyed //TODO think about change behaviour not to modify main value
			speed:0,
			dirAbs : 0,
			rotSpeed : 0,
			antFunc: antFF.RL,
			run: function () //2tst f without arg probably is faster //with(this)  is 4x slower
			{
			  	switch (this.dir) //step
				{
					case 0: if (this.y == yM) this.y = 0; else this.y++; break;
					case 1: if (this.x == xM) this.x = 0; else this.x++; break;
					case 2: if (this.y == 0) this.y = yM; else this.y--;  break;
					case 3: if (this.x == 0) this.x = xM; else this.x--;  break;
				}

				//var c=buffer32[this.y*dataSize+this.x] >> 16&255; //R
				let pos=this.y*stt.w+this.x;
				
				//this.antFunc(this, pos);
				this.antFunc(this, pos);//#opt
				/*
				switch (field[pos])
				{
					case 0: field[pos]=255; this.dirAbs++; this.rotSpeed+=4; if (this.dir == 3) this.dir = 0; else this.dir++; break;
					default:
					case 255: field[pos]=0; this.dirAbs--; this.rotSpeed-=4; if (this.dir == 0) this.dir = 3; else this.dir--; break;
				}
				*/
				
				//----------visual
				let bVisited=arrHist[pos]!=0;
				let arrHist_pos=arrHist[pos];
				
				switch(stt.hist_mode)
				{
					case "continue":
						if(bVisited) // visited
						{
							//if(this.step_i>4095) this.step_i=0;
							this.step_i=arrHist_pos;
						}
					break;
					case "continueNew":
						if(this.step_i<arrHist[pos]+100) //visited recently //TODO num to settings
						{
							this.step_i=arrHist_pos;
						}
					break;
					case "avg":
						//if(arrHist_pos!=0)
						{
							//if(this.step_i>4096) this.step_i=0;
							this.step_i=(arrHist_pos+this.step_i)/2;
						}
					break;
				}
				
				arrHist[pos]=this.step_i;
			
				arrVisits[pos]++;
				
				
				arrDir_last[pos]=this.dir;
				arrHistDir_E[pos]+=this.dir;
				arrHistDirAbs[pos]=this.dirAbs;
				
				if(this.rotSpeed>0)this.rotSpeed-=0.2;
				else
				if(this.rotSpeed<0)this.rotSpeed+=0.2;
				this.rotSpeed*=0.999; //this averages and lead to trails as on rotSpeed.png //opt every 10
				//this.rotSpeed*=0.95; 
				arrHist_rotSpeed[pos]=this.rotSpeed;
				
				switch(stt.hist_incr_mode)
				{
					case "no":
					break;
					case "unvisited":
						if(!bVisited)
						{
							this.step_i++;
						}
					break;
					case "visited":
						if(bVisited)
						{
							this.step_i++;
						}
					break;					
					case "visitOld":
						if(this.step_i>arrHist_pos+10000)
						{
							this.step_i++;
						}
					break;
					default:
						this.step_i++;
					break;
				}
				
				this.step_i_real++;
				//----------
			}
		}



function dir8()
{
	  if(field[ant.x][ant.y]==0) 
  {
	field[ant.x][ant.y]=255;
	ant.dir+=3;
  }
  else
  {
	field[ant.x][ant.y]=0;
	ant.dir-=3;
  }
  switch(ant.dir)
  {
        case 8:	ant.dir=0;
	case 0:	ant.x++;			break;
	case 1:	ant.x++;ant.y++;	break;
	case 2:	ant.y++;			break;
	case 3:	ant.y++;ant.x--;	break;
	case 4:	ant.x--;			break;
	case 5:	ant.x--;ant.y--;	break;
	case 6:	ant.y--;			break;
	
        case -1: ant.dir=7;
	case 7:	ant.y--;ant.x++;	break;
  }
}

var ant_fdir = {
			bFloatDir:true,
			dir : 0,
			x : xc, 
			y: yc,
			
			centerXY: function ()
			{
			 this.x=~~xc;
			 this.y=~~yc;
			},
				
			//dxy:0 //speed on this segment
			step_i:0,
			speed:0,
			dirAbs : 0,
			rotSpeed : 0,
			antFunc: antFF_f.RL,
			run: function () //2tst f without arg probably is faster //with(this)  is 4x slower
			{
			  	switch (~~this.dir) //step
				{
					case 0: if (this.y >= yM) this.y = 0; else this.y++; break;
					case 1: if (this.x >= xM) this.x = 0; else this.x++; break;
					case 2: if (this.y <= 0) this.y = yM; else this.y--;  break;
					case 3: if (this.x <= 0) this.x = xM; else this.x--;  break;
				}
				

				let pos=this.x*stt.h+this.y;
				
				//this.antFunc(this, pos);
				switch (field[pos])
				{
					case 0: field[pos]=255; this.dir+=0.4;this.dirAbs+=0.4; this.rotSpeed+=4; break;
					default:
					case 255: field[pos]=0; this.dir-=0.3;this.dirAbs-=0.3; this.rotSpeed-=4; break;
				}
				this.dir%=dirM;
				
				
				//----------visual
				arrHist[pos]=this.step_i;
				arrVisits[pos]++;
				
				
				arrDir_last[pos]=this.dir;
				arrHistDir_E[pos]+=this.dir;
				arrHistDirAbs[pos]=this.dirAbs;
				
				if(this.rotSpeed>0)this.rotSpeed-=0.2;
				else
				if(this.rotSpeed<0)this.rotSpeed+=0.2;
				//this.rotSpeed*=0.999; //this averages and lead to trails as on rotSpeed.png //opt every 10
				this.rotSpeed*=0.95; 
				arrHist_rotSpeed[pos]=this.rotSpeed;
				
				this.step_i++;
				//----------
			}
		}
var ant_f = {
			bFloatPos:true,
			bFloatDir:true,
			dir : 0,
			x : xc, 
			y: yc,
			
			xAdd:0.2,
			yAdd:0.2,
			xSub:0.2,
			ySub:0.2,

			centerXY: function ()
			{
			 this.x=~~xc;
			 this.y=~~yc;
			},
				
			//dxy:0 //speed on this segment
			step_i:0,
			speed:0,
			dirAbs : 0,
			rotSpeed : 0,
			antFunc: antFF_f.RL,
			run: function () //2tst f without arg probably is faster //with(this)  is 4x slower
			{
				//let x=~~this.x; //t8
				//let y=~~this.y;
				
				/* //for positive xAdd xSub
			  	switch (~~this.dir) //step
				{
					case 0: this.x+=this.xAdd; this.x%=xM; break;
					case 1: this.y+=this.yAdd; this.y%=yM; break;
					case 2: this.x-=this.xSub; if(this.x<0)this.x+=xM;  break;
					case 3: this.y-=this.ySub; if(this.y<0)this.y+=yM; break;
				}
				*/
				switch (~~this.dir) //step
				{
					case 0: this.x+=this.xAdd; break;
					case 1: this.y+=this.yAdd; break;
					case 2: this.x-=this.xSub; break;
					case 3: this.y-=this.ySub; break;
				}

				 let x=Math.abs(~~this.x%xM);
				 let y=Math.abs(~~this.y%yM);
				let pos=x*stt.h+y;
				//let pos=~~((this.x)*stt.h+(this.y)); //this make 4x trails

				
				//this.antFunc(this, pos);
				switch (field[pos])
				{
					case 0: field[pos]=255; this.dir+=0.4;this.dirAbs+=0.4; this.rotSpeed+=4; break;
					default:
					case 255: field[pos]=0; this.dir-=0.3;this.dirAbs-=0.3; this.rotSpeed-=4; break;
				}
				this.dir%=dirM;
				

				//----------visual
				
				arrHist[x][y]=this.step_i;
				arrVisits[x][y]++;
				
				
				arrDir_last[x][y]=this.dir;
				arrHistDir_E[x][y]+=this.dir;
				arrHistDirAbs[x][y]=this.dirAbs;
				
				if(this.rotSpeed>0)this.rotSpeed-=0.2;
				else
				if(this.rotSpeed<0)this.rotSpeed+=0.2;
				//this.rotSpeed*=0.999; //this averages and lead to trails as on rotSpeed.png //opt every 10
				this.rotSpeed*=0.95; 
				arrHist_rotSpeed[x][y]=this.rotSpeed;
				
				this.step_i++;
				//----------
			}
		}

//----------
function fill_randomPos()
{
	var lenM=buffer32.length
	for(i=0;i<222222;i++) //### https://stackoverflow.com/questions/8279729/calculate-fps-in-canvas-using-requestanimationframe
	{
		n=Math.round(rand()*lenM)
		buffer32[n] += Math.random()*5<<16;
		buffer32[n] += Math.random()*2<<8;
	}
}
function fill_randomPos2() //41ms @1Mbp
{
	for(var y=0, n=0;y<1024;y++) 
	{
	for(var x=0;x<1024;x++,n++)
	{
		buffer32[n] += Math.random()*11<<16; //B
		buffer32[n] += Math.random()*22<<8; //G
		buffer32[n] += Math.random()*33; //R
	}
	}
}
