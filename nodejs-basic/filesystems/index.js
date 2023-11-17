// const fs = require('fs');

// const note = fs.readFileSync('./nodejs-basic/filesystems/note.txt', 'utf8');
// console.log(note);

const fs = require("fs");
const { resolve } = require("path");

const fileReadCallback = (error, data) => {
if (error) {
    console.log("Gagal membaca berkas");
    return; 
    }   
console.log(data);
};

fs.readFile(resolve(__dirname, "note.txt"), "UTF-8", fileReadCallback);