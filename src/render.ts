console.log("js loaded");

// libaries
//const {dialog} = require('electron').remote;

// make vars
const DOM = document;
const btnpy = DOM.getElementById('btnpy');
const btngo = DOM.getElementById('btngo');
const btncs = DOM.getElementById('btncs');
const btncpp = DOM.getElementById('btncpp');
const btnjava = DOM.getElementById('btnjava');
const btnjs = DOM.getElementById('btnjs');
const cnvrt = DOM.getElementById('cnvrt');
const selfile = DOM.getElementById('selfile');

function convert(element: string, file: string, type: string) {
    console.log(`element: ${element}\nfile: ${file}\ntype: ${type}`);
}

btnpy.onclick = function(){
    console.log("click!");
};

btngo.onclick = function(){
    console.log("click!");
};

btncs.onclick = function(){
    console.log("click!");
};

btncpp.onclick = function(){
    console.log("click!");
};

btnjava.onclick = function(){
    console.log("click!");
};

btnjs.onclick = function(){
    console.log("click!");
};

cnvrt.onclick = function(){
    console.log("click!");
};

selfile.onclick = function(){
    console.log("click!");
};