"use strict";
let magicions_name = ["ayan", "oneeb", "ammar", "affan"];
const copy = (magitions_name) => [...magicions_name];
// console.log(copy(magicions_name))
const make_great = (magicions_name) => {
    for (let i in magicions_name) {
        magicions_name[i] = `the Great ${magicions_name[i]}`;
    }
    // console.log(magicions_name);
};
const show_magicians = (magitions_name) => {
    for (const i of magitions_name) {
        console.log(i);
    }
};
let copyMag = copy(magicions_name);
make_great(copyMag);
console.log('original magicians \n');
show_magicians(magicions_name);
console.log('copied magicians \n');
show_magicians(copyMag);
