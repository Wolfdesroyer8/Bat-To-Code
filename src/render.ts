console.log("js loaded");

// libaries
const {dialog} = require('electron').remote;

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

// make objects and inerfaces
interface CnvrtArgs{
    element: string,
    type: string
}

let convert = (args: CnvrtArgs) => {
    
}