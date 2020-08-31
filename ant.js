//https://en.wikipedia.org/wiki/Turmite
//https://en.wikipedia.org/wiki/Langton%27s_ant

function resetwh()
{
	if(window.innerHeigh!==undefined)
	{
	h=window.innerHeigh>1200 ?1024:512; //console.log(window.innerHeigh, 'set hh:', hh);
	w=window.innerWidth>1100 ?1024:512; //!TODO. this can be done afterpage load
	}
	else
	{ //url ?w=32&h=512
	let searchParams = new URLSearchParams(window.location.search);
		h=searchParams.get('h')
		if(h!=null){
			h=parseInt(h); if(h<32) h=32; else if(h>2048) h=2048;
		}
		w=searchParams.get('w')
		if(w!=null){
			w=parseInt(w); if(w<32) w=32; else if(w>4096) w=4096;
		}
	}
	hh = h==null?1024:h;
	ww = w==null?1024:w;
	console.log('set w,h, arrays to: ', ww,hh);

 xc=ww/2;
 yc=hh/2;
 xM=ww-1;
 yM=hh-1;

chartSize=hh; //! legasy
dataSize=hh//! legasy

 field= new Uint8Array(ww*hh); //fastest 8M iterations = 100ms
 field_f= new Float32Array(ww*hh); //for ant_f
// field = d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return 0;});});//return ~~(i%2*255); //d3 way became to faster working aray 10-15%. d3.v5>v3 also Opera>>Chromium>>FF
/* //this is slower than D3 in LOOP 8M iterations =140ms vs 122ms @d3
 field = new Array(dataSize);
 for (let i=0; i<dataSize; ++i) {
	field[i] = new Uint8Array(dataSize);
		 for (let j=0; j<dataSize; ++j) {			 field[i][j]=0;		 }
	}
	*/
 arrHist = d3.range(ww).map(function(d, i){return d3.range(hh).map(function(d, i){return 0;});});
 arrVisits = d3.range(ww).map(function(d, i){return d3.range(hh).map(function(d, i){return 0;});});

 arrHistDir_E = d3.range(ww).map(function(d, i){return d3.range(hh).map(function(d, i){return 0;});});
 arrDir_last = d3.range(ww).map(function(d, i){return d3.range(hh).map(function(d, i){return 0;});});
 arrHistDirAbs = d3.range(ww).map(function(d, i){return d3.range(hh).map(function(d, i){return 0;});});

 arrHist_rotSpeed = d3.range(ww).map(function(d, i){return d3.range(hh).map(function(d, i){return 0;});});
// field =Array(ww).fill(Array(hh)); //Rows are copied by reference
//https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array

//TODO filled area per t, 	end point distance per t
}
resetwh();

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
		if (arrVisits[o.x][o.y]%2==0) r(o);
		else l(o);

	}

}

antFF_f=  //float calc for ant_f
{
	RL:function(o,pos)
	{
		if (arrVisits[o.x][o.y]%2==0) r(o);
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
				let pos=this.x*hh+this.y;
				
				this.antFunc(this, pos);
				/*
				switch (field[pos])
				{
					case 0: field[pos]=255; this.dirAbs++; this.rotSpeed+=4; if (this.dir == 3) this.dir = 0; else this.dir++; break;
					default:
					case 255: field[pos]=0; this.dirAbs--; this.rotSpeed-=4; if (this.dir == 0) this.dir = 3; else this.dir--; break;
				}
				*/
				
				//----------visual
				arrHist[this.x][this.y]=this.step_i;
				arrVisits[this.x][this.y]++;
				
				
				arrDir_last[this.x][this.y]=this.dir;
				arrHistDir_E[this.x][this.y]+=this.dir;
				arrHistDirAbs[this.x][this.y]=this.dirAbs;
				
				if(this.rotSpeed>0)this.rotSpeed-=0.2;
				else
				if(this.rotSpeed<0)this.rotSpeed+=0.2;
				this.rotSpeed*=0.999; //this averages and lead to trails as on rotSpeed.png //opt every 10
				//this.rotSpeed*=0.95; 
				arrHist_rotSpeed[this.x][this.y]=this.rotSpeed;
				
				this.step_i++;
				//----------
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
				

				let pos=this.x*hh+this.y;
				
				//this.antFunc(this, pos);
				switch (field[pos])
				{
					case 0: field[pos]=255; this.dir+=0.4;this.dirAbs+=0.4; this.rotSpeed+=4; break;
					default:
					case 255: field[pos]=0; this.dir-=0.3;this.dirAbs-=0.3; this.rotSpeed-=4; break;
				}
				this.dir%=dirM;
				
				
				//----------visual
				arrHist[this.x][this.y]=this.step_i;
				arrVisits[this.x][this.y]++;
				
				
				arrDir_last[this.x][this.y]=this.dir;
				arrHistDir_E[this.x][this.y]+=this.dir;
				arrHistDirAbs[this.x][this.y]=this.dirAbs;
				
				if(this.rotSpeed>0)this.rotSpeed-=0.2;
				else
				if(this.rotSpeed<0)this.rotSpeed+=0.2;
				//this.rotSpeed*=0.999; //this averages and lead to trails as on rotSpeed.png //opt every 10
				this.rotSpeed*=0.95; 
				arrHist_rotSpeed[this.x][this.y]=this.rotSpeed;
				
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
				let pos=x*hh+y;
				//let pos=~~((this.x)*hh+(this.y)); //this make 4x trails

				
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
