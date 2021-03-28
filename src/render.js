console.log("js loaded");
// libaries
//const {dialog} = require('electron').remote;
// make vars
var DOM = document;
var btnpy = DOM.getElementById('btnpy');
var btngo = DOM.getElementById('btngo');
var btncs = DOM.getElementById('btncs');
var btncpp = DOM.getElementById('btncpp');
var btnjava = DOM.getElementById('btnjava');
var btnjs = DOM.getElementById('btnjs');
var cnvrt = DOM.getElementById('cnvrt');
var selfile = DOM.getElementById('selfile');
function convert(element, file, type) {
    console.log("element: " + element + "\nfile: " + file + "\ntype: " + type);
}
btnpy.onclick = function () {
    console.log("click!");
};
btngo.onclick = function () {
    console.log("click!");
};
btncs.onclick = function () {
    console.log("click!");
};
btncpp.onclick = function () {
    console.log("click!");
};
btnjava.onclick = function () {
    console.log("click!");
};
btnjs.onclick = function () {
    console.log("click!");
};
cnvrt.onclick = function () {
    console.log("click!");
};
selfile.onclick = function () {
    console.log("click!");
};
