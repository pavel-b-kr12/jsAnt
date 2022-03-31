/*
hold pos in obj elementPos and save/load from localStorage 'elementPos'
usage:
.panel {position: absolute;}

<div class="panel">
<li>hold Ctrl to move panels or check to drag: <input type='checkbox' oninput='bpanDragWOCtrl=checked'></li>
<button onclick='elementPos_reset()'>reset panels pos</button><br>
<div>

elementPos_load('panel');
*/

function elementPos_save(el){
	elementPos[el.id].x=el.style.left;
	elementPos[el.id].y= el.style.top;
	elementPos[el.id].z=el.style.zIndex;
	localStorage.setItem('elementPos', JSON.stringify(elementPos));
}

//this also use default to fill object elementPos{} 
function elementPos_load(ClassName, allowedChild){ 

	let s=localStorage.getItem('elementPos');
	elementPos=s?JSON.parse(s):{};
	
	let es=document.getElementsByClassName(ClassName);
	for(let i=0;i<es.length;i++)
	{
		let e=es[i];
		if(!e.id) e.id='p'+i;
		
		elementPos_set(e);
		draggable(es[i],allowedChild);
	}
}
var elementPos_load_i=0;
function elementPos_set(el){
	if(!elementPos[el.id]) {
		elementPos[el.id]=
		{
			x:10+elementPos_load_i*80+'px',
			y:20+elementPos_load_i*50+'px',
			z:elementPos_load_i,
		}
	}

	el.style.left=elementPos[el.id].x;
	el.style.top=elementPos[el.id].y;
	el.style.zIndex=elementPos[el.id].z;
	elementPos_load_i++;
}
function elementPos_reset(){
	localStorage.removeItem('elementPos'); 
	window.location.reload();
}

var panZindex_last=0;
var pan_sel_last=null;
var bpanDragWOCtrl=false;
function draggable(el, allowedChild) {
  el.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
    
    function mouseMoveHandler(e) {//console.log(e.target, this)
		//&&(this === e.target ||e.target.tagName==allowedChild)) //prevent event bubbling from child unless hold CTRL 
		if(bpanDragWOCtrl || e.ctrlKey) { 
		  el.style.top = (e.clientY - offsetY) + 'px';
		  el.style.left = (e.clientX - offsetX) + 'px';
		  if(pan_sel_last!=el)
		  {
			pan_sel_last=el;
			panZindex_last++;
			el.style.zIndex=panZindex_last;
		  }
	  }
    }

    function reset() {
      el.removeEventListener('mousemove', mouseMoveHandler);
      el.removeEventListener('mouseup', reset);
	  elementPos_save(el);
    }

    el.addEventListener('mousemove', mouseMoveHandler);
    el.addEventListener('mouseup', reset);
	

  });
}