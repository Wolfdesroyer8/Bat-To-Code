console.log("js loaded");
const DOM = document;
const btnpy = DOM.getElementById('btnpy');
const btngo = DOM.getElementById('btngo');
const btncs = DOM.getElementById('btncs');
const btncpp = DOM.getElementById('btncpp');
const btnjava = DOM.getElementById('btnjava');
const btnjs = DOM.getElementById('btnjs');
const cnvrt = DOM.getElementById('cnvrt');
const selfile = DOM.getElementById('selfile');
const { ipcRenderer } = require('electron');
class Type {
    changetype(type) {
        DOM.getElementById("cnvrttype").innerHTML = `Converted Type: ${type}`;
        this.type = type;
    }
    getType() {
        return this.type;
    }
}
function convert(element, file, type) {
    console.log(`element: ${element}\nfile: ${file}\ntype: ${type}`);
}
let type = new Type;
btnpy.onclick = function () {
    type.changetype("Python");
};
btngo.onclick = function () {
    type.changetype("Golang");
};
btncs.onclick = function () {
    type.changetype("C#");
};
btncpp.onclick = function () {
    type.changetype("C++");
};
btnjava.onclick = function () {
    type.changetype("Java");
};
btnjs.onclick = function () {
    type.changetype("JavaScript");
};
cnvrt.onclick = function () {
    console.log("convert");
};
selfile.onclick = function () {
    console.log("select file");
};
console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg);
});
ipcRenderer.send('asynchronous-message', 'ping');
