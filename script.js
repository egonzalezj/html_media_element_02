/*
* File name: script.js
* Description:
* HTML Media Capture demo.
* Get a media element and show it in a browser.
* Author: Elisabet González.
* Source:
* Date: June 28th, 2016.
* Version 2.0
*
* History:
* v2.0  24/06/2016  getUserMedia validation added.
* v2.1  30/06/2016  video object added.
*/

//Detects if browser supports getUserMedia().
if (hasGetUserMedia()) { //2.0
} else {
  alert('getUserMedia() is not supported in your browser');
}

//Search for the first file type element founded
var input = document.querySelector('input[type=file]'); //1.0
//Show image when a file is selected from input form
input.onchange = function() { //1.0
  var file = input.files[0]; //Choose the first element of the list o files selected
  drawOnCanvas(file);
  //displayAsImage(file);
};

var errorCallback = function(e) { //2.1
  console.log('Rejected', e);
}

//Video capture 2.1
navigator.getUserMedia =  navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.mediaDevices.getUserMedia ||
                          navigator.msGetUserMedia;
var video = document.querySelector('video');
if (navigator.getUserMedia) {
  navigator.getUserMedia({video: true}, function(stream) {
    video.src = window.URL.createObjectURL(stream);
  }, errorCallback);
} else {
  video.src = 'video.mov'; //fallback
}

//1.0
function drawOnCanvas(file) {
  var reader = new FileReader();
  reader.onload = function(e) { //Event handler
    var dataURL = e.target.result, //Return the element that triggered the event
        c = document.querySelector('canvas'), //Search for the first canvas element founded
        ctx = c.getContext('2d'),
        img = new Image();
    img.onload = function() {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataURL;
  };
  reader.readAsDataURL(file);
}
//1.0
function displayAsImage(file) {
  var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');
  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };
  img.src = imgURL;
  document.body.appendChild(img);
}
//2.0
function hasGetUserMedia() {
  return !!(navigator.getUserMedia||navigator.webkitGetUserMedia||
            navigator.mozGetUserMedia|| navigator.msGetUserMedia);
}
