"use strict";
let alien_color = 'green';
// first version
if (alien_color === 'green') {
    console.log(`you got 5 points for shooting the alien`);
}
else if (alien_color != 'green') {
    console.log(`you got 10 points for shooting the alien`);
}
// second version
alien_color = 'blue';
if (alien_color === 'green') {
    console.log(`you got 5 points for shooting the alien`);
}
else if (alien_color != 'green') {
    console.log(`you got 10 points for shooting the alien`);
}
