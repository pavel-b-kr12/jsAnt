function $(s) {return document.getElementById(s);}
function rand() {return Math.random()}
function randInt(max) {return Math.floor(Math.random() * Math.floor(max));}
function $tx(s,t){$(s).innerText=t}
function hide_sw(id){
  x=$(id);
  if (x.style.display === "none") x.style.display = "block";
  else x.style.display = "none";
// $(id).classList.toggle('hidden')
}
function sleep(ms) {
   var currentTime = new Date().getTime();
   while (currentTime + ms >= new Date().getTime()) {   }
}

//TODO test speed
//----------
 //RGB to HSL https://stackoverflow.com/questions/41229411/how-to-optimize-execution-time-for-rgb-to-hsl-conversion-function
//----------
/** https://gist.github.com/mjackson/5311256
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}
function hToRgb(h) {
  var r, g, b;
  h*=0.01;
  h%=1;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var q =  1 - f;
  var t =  f;

  switch (i % 6) {
    case 0: r = 1, g = t, b = 0; break;
    case 1: r = q, g = 1, b = 0; break;
    case 2: r = 0, g = 1, b = t; break;
    case 3: r = 0, g = q, b = 1; break;
    case 4: r = t, g = 0, b = 1; break;
    case 5: r = 1, g = 0, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}
function hueToRGB( v1,  v2,  vH) { //!check
	if (vH < 0.0) vH+= 1.0;
	if (vH > 1.0) vH -= 1.0;
	if ((6.0 * vH) < 1.0) return (v1 + (v2 - v1) * 6.0 * vH);
	if ((2.0 * vH) < 1.0) return (v2);
	if ((3.0 * vH) < 2.0) return (v1 + (v2 - v1) * ((2.0 / 3.0) - vH) * 6.0);
	return v1*255;
}
function RGB2HTML(red, green, blue)
{
    var decColor =0x1000000+ blue + 0x100 * green + 0x10000 *red ;
    return '#'+decColor.toString(16).substr(1);
}
function RGBArr2HTML(rgb)
{
    var decColor =0x1000000+ rgb[0] + 0x100 * rgb[1] + 0x10000 *rgb[2] ;
    return '#'+decColor.toString(16).substr(1);
}


function canvasClear(canv)
{
canv.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

//--math
function powerOf2(v) {return v && !(v & (v - 1));}