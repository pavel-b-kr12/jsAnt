function fill_field(){
	for(var yy=0, n=0; yy<ss.h; yy++)
	for(var xx=0; xx<ss.w; xx++,n++)
	{
		field[n]= fill_get_c(xx,yy); 
	}	
}

function fill_get_c(xx,yy){
	let bfill_clamp_to_max_colors=ss.bfill_clamp_to_max_colors;
	let color_max=ss.color_max;
	var ret=0;

	switch(ss.fill_mode) //+ cast to int
	{
	//fill field with pattern from canvasFil_patternlArr
	case 'fill_w_pattern': ret= canvasFil_patternlArr[xx%canvasFill_wE+(yy%canvasFill_hE)*canvasFil_patternlArrSizeM]*222/colorFill_iE; break;

	default:
	case 'fill_0': ret= 0; break;
	case 'fill_1': ret= 1; break;
	case 'fill_255': ret= 255; break;
	case 'fill_half': ret=xx>ss.h/2?255:0; break;
	case 'fill_halfDiag': ret=(xx+yy)>ss.h?255:0; break;
	case 'fill_99': ret= 99; break;
	case 'columns255': ret= xx%2*255; break;
	case 'columns_color_max_or_1': ret= xx%2*(bfill_clamp_to_max_colors?color_max:1); break;
	case 'columns3_color_max_or_1': ret= xx%3*(bfill_clamp_to_max_colors?color_max:1); break;
									  //~~ == Math.floor двойного побитового отрицания
	case 'checkers': ret= ((~~(xx%2))^(~~(yy%2)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers_f': ret= ((xx%2)^(yy%2) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers_and_f': ret= ((xx%2)&(yy%2) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers_andand_f': ret= ((xx%2)&&(yy%2) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;

	case 'checkers3':			ret= ((~~(xx%3))^(~~(yy%3)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers3AND':		ret= ((~~(xx%3))&(~~(yy%3)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers3ANDAND':	ret= ((~~(xx%3))&&(~~(yy%3)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers3OR':		ret= ((~~(xx%3))^(~~(yy%3)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers3is0':		ret= ((~~(xx%3)==0)^(~~(yy%3)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers3is0AND':	ret= ((~~(xx%3)==0)&(~~(yy%3)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;


	case 'checkers4':			ret= ((~~(xx%4))^(~~(yy%4)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers4AND':		ret= ((~~(xx%4))&(~~(yy%4)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers4ANDAND':	ret= ((~~(xx%4))&&(~~(yy%4)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers4OR':		ret= ((~~(xx%4))^(~~(yy%4)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers4is0':		ret= ((~~(xx%4)==0)^(~~(yy%4)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers4is0AND':	ret= ((~~(xx%4)==0)&(~~(yy%4)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;		

	case 'checkers5':			ret= ((~~(xx%5))^(~~(yy%5)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers5AND':		ret= ((~~(xx%5))&(~~(yy%5)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers5ANDAND':	ret= ((~~(xx%5))&&(~~(yy%5)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers5OR':		ret= ((~~(xx%5))^(~~(yy%5)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers5is0':		ret= ((~~(xx%5)==0)^(~~(yy%5)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers5is0AND':	ret= ((~~(xx%5)==0)&(~~(yy%5)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
		  
	case 'checkers7':			ret= ((~~(xx%7))^(~~(yy%7)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers7AND':		ret= ((~~(xx%7))&(~~(yy%7)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers7ANDAND':	ret= ((~~(xx%7))&&(~~(yy%7)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers7OR':		ret= ((~~(xx%7))^(~~(yy%7)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers7is0':		ret= ((~~(xx%7)==0)^(~~(yy%7)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers7is0AND':	ret= ((~~(xx%7)==0)&(~~(yy%7)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
		  
	case 'checkers8':			ret= ((~~(xx%8))^(~~(yy%8)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers8AND':		ret= ((~~(xx%8))&(~~(yy%8)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers8ANDAND':	ret= ((~~(xx%8))&&(~~(yy%8)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers8OR':		ret= ((~~(xx%8))^(~~(yy%8)) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers8is0':		ret= ((~~(xx%8)==0)^(~~(yy%8)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;
	case 'checkers8is0AND':	ret= ((~~(xx%8)==0)&(~~(yy%8)==0) )*(bfill_clamp_to_max_colors?color_max:255) ;  break;

	case 'checkers4/2+8/2': ret=	((~~(xx%4))^(~~(yy%4)) )*(bfill_clamp_to_max_colors?color_max:255)/2 +
								((~~(xx%8))^(~~(yy%8)) )*(bfill_clamp_to_max_colors?color_max:255)/2 ;  break;
	case 'checkersA': ret= xx%2*(bfill_clamp_to_max_colors?color_max/2:127)+yy%2 *(bfill_clamp_to_max_colors?color_max/2:127) ;  break;
	//((~~(d%2))^(~~((d/ss.h)%2)))*255; //(~~(x%2))^(~~(y%2))*255;
	case 'checkersAn': ret= (~~(xx%2))*(bfill_clamp_to_max_colors?color_max/2:127)+(~~(yy%2)) *(bfill_clamp_to_max_colors?color_max/2:127) ;  break; //~~

	case 'rand0color_max': ret=Math.random() >= 0.5 ?color_max:0;  break;
	case 'rand*255': ret= Math.random()*255;  break;			// Math.random == [0, 1) //?? 255 
	case 'rand*color_max': ret= Math.Round(Math.random()*color_max);  break;

	case 'x%255': ret= xx%255; break;
	case 'x%color_max': ret= xx%color_max; break;
	}
	return ret;
}


var canvasFill_wE=2,canvasFill_hE=2;
canvasFil_patternlArrSizeM=8
var canvasFil_patternlArr = new Uint8Array(canvasFil_patternlArrSizeM*canvasFil_patternlArrSizeM);

var canvasFill = document.getElementById("canvasFill"),
	canvasFill_ctx = canvasFill.getContext("2d"),
	boxSize = 20,
	boxes = Math.floor(canvasFill.width / boxSize);
canvasFill.addEventListener('click', canvasFill_Click);
//canvasFill.addEventListener('mousemove', canvasFill_Click);

function patternBox_draw() { //initial draw of empty grid
	canvasClear(canvasFill);
	canvasFill_ctx.beginPath();
	canvasFill_ctx.fillStyle = "white";
	canvasFill_ctx.lineWidth = 2;
	canvasFill_ctx.strokeStyle = 'black';
	for (var row = 0; row < canvasFill_hE; row++) {
		for (var column = 0; column < canvasFill_wE; column++) {
		  var x = column * boxSize;
		  var y = row * boxSize;
		  canvasFill_ctx.rect(x, y, boxSize, boxSize);
		  canvasFill_ctx.fill();
		  canvasFill_ctx.stroke();
		}
	}
	canvasFill_ctx.closePath();
}
var colorFill_i=0;
var colorFill_iE=6; //6 colors
var colors= [ 'black', 'white', 'blue', 'red', 'green', 'yellow', 'purple', 'aqua', 'fuchsia', 'gray', 
'lime', 'maroon', 'navy', 'olive', 'orange', 
'silver', 'teal']; //this colors only for pattern box, as GL shader has defferent colorize options //TODO use same shader
/*var colorsABC= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];*/
var canvasFill_Click_pos_old=-1;
function canvasFill_Click(e) {
	let y=Math.floor(e.offsetY / boxSize);
	let x=Math.floor(e.offsetX / boxSize);
	
	let pos=y*canvasFil_patternlArrSizeM+x;
	if(canvasFill_Click_pos_old==pos) //change color only if clicking again
	{
		colorFill_i++; colorFill_i%=colorFill_iE;
	}
	canvasFill_Click_pos_old=pos;
	
	canvasFill_ctx.fillStyle=colors[colorFill_i] //RGBArr2HTML(hsvToRgb(colorFill_i/colorFill_iE,1,1))
	canvasFill_ctx.fillRect(x * boxSize, y * boxSize, boxSize, boxSize);

	canvasFil_patternlArr[pos]=colorFill_i;
	
	stt.fill_mode='fill_w_pattern';
	fill_field();
}


function arr_clear_all() //except field
{
	for(let i=0;i<tt.wh;i++){
			 arrHist[i] =0;
			 arrVisits[i] =0;
			 arrHistDir_E[i] =0;
			 arrDir_last[i] =0;
			 arrHistDirAbs[i] =0;
			 arrHist_rotSpeed[i] =0;
			 arrSeq[i] =0;

	}
	
	
	for(let i=0;i<arrAntLastStepC.length;i++) arrAntLastStepC[i]=-1;
	AntLastStep=0;
	seq_detect_m=30;
	seq_detected_shift=0;
	seq_N=0;
}