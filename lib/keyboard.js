var bWaitKeyUp=false;
function setSpeed(v){
	if(v==0){swStartStop(false);}
	else
	{
		v=Math.pow(8,(v-1));
		if(ss.speed==v) {swStartStop();}
		else {stt.speed=v;  if(bStop) swStartStop(true); }
	}
	if(Math.abs(ss.speed)>10000000) stt.speed=10000000;
}

//var bMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
document.body.onkeyup = function(e){
	bWaitKeyUp=false;
	if(e.keyCode == 32){swStartStop()} //space
	else
	if(e.keyCode == 65) sw_bAudioOFF(); //a
	else{
	 //if(!bMobile)	$('btn_show_field').click() //show different maps only while pressing key
	}
}

document.body.onkeydown = function(e){
	if(bWaitKeyUp) return; //to make keys responce faster - function handle press but not up
	bWaitKeyUp=true;
	//console.log(e.key, e.keyCode, String.fromCharCode(e.keyCode)) //codes https://stackoverflow.com/questions/3781142/jquery-or-javascript-how-determine-if-shift-key-being-pressed-while-clicking-an
	if( e.keyCode==46){fill_field_clear_all(); return; } //del
	if( 
	e.key==1 ||
	e.key==2 ||
	e.key==3 ||
	e.key==4 ||
	e.key==5 ||
	e.key==6 ||
	e.key==7 ||
	e.key==8 ||
	e.key==9
	) setSpeed(e.key);
	else
	if( e.keyCode==192) setSpeed(0);//`
	else
	{
		if(e.keyCode >= 65 && e.keyCode <= 90) 
		{
			sortcutPress(String.fromCharCode(e.keyCode).toLowerCase());
		}
	}
}
//to use it set id or mane='shrtcutBtn'+k , where k is key
function sortcutPress(k){ //console.log(k)
	if(Sortcuts_els[k])
		Sortcuts_els[k].click();
}
var shrtcutBtn_last=null;
function shrtcutBtn_click(e){
	el=e.target;
	if(el.tagName=='B')el=el.parentElement;
	if(el==shrtcutBtn_last) return;
	stt.showArr=el.textContent;
}
Sortcuts_els=[];//[tag]=el //to search el by key
