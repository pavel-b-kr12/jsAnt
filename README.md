![](https://pavel-b-kr12.github.io/TjurmiteHQ_Langtons_ant_nest/scr/JSwebGL_2020.08.26.png)

run and play this online in browser: <https://pavel-b-kr12.github.io/TjurmiteHQ_Langtons_ant_nest/>	 Applications Need click to focus and start audio.		

[webGL.htm main app](https://pavel-b-kr12.github.io/TjurmiteHQ_Langtons_ant_nest/js/webGL.htm?w=1024&h=512   )

[TjurmitsHQ.htm  another app with DatGUI ](https://pavel-b-kr12.github.io/TjurmiteHQ_Langtons_ant_nest/js/TjurmitsHQ.htm  )

[gallery.htm  some experiments and good-looking (yellow) or good sounding (blue mark) ants ](https://pavel-b-kr12.github.io/TjurmiteHQ_Langtons_ant_nest/js/ants_gallery_js/index.htm  )

[p5js.htm  another app with DatGUI](https://pavel-b-kr12.github.io/TjurmiteHQ_Langtons_ant_nest/js/p5js.htm   )

[p5js_webGL.htm  another app with DatGUI](TODO   )

*.htm 					separate .htm experiment ants. TODO implement as presets

### TODO
* fix links

* em, set settings in url

* rethink resolution according to screen size

* ask someone with smartphone to test if it working on phones at all 

* fix p5js, upd it

* add features of save/load, presets, find pattern from TjurmitsHQ to  webGL.htm

* GL no/smooth settings

#### other banchmark

test2 webGL 8M ops = 220ms (extended ant mode)+  10~15ms draw

test1 js 100M ops =936ms

### implemented key features:
[*] change program of walking, programs of visualisation and audiolisation
[*] fill field with pattern or function
[*] save/load parameters
[*] save/load field to image
[*] multiple ants
### Specific to app:

#### webGL.htm app
[*] fast send arrays and settings to shader
[*] GPU pan, zoom, colorization
[*] select ant, view and change properties
[*] animate camera and parameters
[*] мultilanguage イnてrface
[*] draggable panels of inteface, pos are saved

#### TjurmitsHQ.htm app
[*] Dat.gui, with save/load
[*] big collection of ants and settings

#### TODO
[ ] investigate why pattern do not shown
[ ] load field
[ ] save localStorage to file
[ ] save img nm, load
[ ] save settings to img QR-code
[ ] negative speed
[ ] upd pattern from f, or list of pictures in select
[ ] dont flood URL untill ask of link





