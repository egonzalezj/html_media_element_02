/*
* File name: avatar.js
* Description:
* HTML Media Capture demo.
* Get a media element and show it in a browser.
* Author(s):  Alberto Pacheco     alberto@acm.org
*             Elisabet González.  eli.jvn@gmail.com
* Source:
* Date: June 28th, 2016.
* Version 1.0
*
* History:
* v1.0  28/06/2016  avatar API added.
*/

var Joints = 10;

function Avatar() { // Avatar class ver. 0.5 (albertochiwas)

  this.width = 0;
  this.height = 0;

  init();

  function init () {
    getCanvasSize();
    this.puppet = loadImage(svgFile);
    this.cx = puppet.width / 2.0; //Puppet center
    this.cy = puppet.height / 2.0;
    this.x = width / 2 - this.cx; //Distance between puppet center and screen certer point
    this.y = height / 2 - this.cy;
    alert("width:"+this.width+" height:"+this.height);
  }

  function getCanvasSize() {
    var c = document.querySelector('canvas');
    this.width = c.width;
    this.height = c.height;
  }

  function draw(img) {
    createCanvas(this.width, this.height);
  }
}
