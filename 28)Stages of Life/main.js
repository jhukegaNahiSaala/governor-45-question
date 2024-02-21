"use strict";
let age_of_person = 34;
if (age_of_person < 2) {
    console.log(`you are a baby`);
}
else if (age_of_person >= 2 && age_of_person < 4) {
    console.log(`you are a toddler`);
}
else if (age_of_person >= 4 && age_of_person < 13) {
    console.log(`you are a kid`);
}
else if (age_of_person >= 13 && age_of_person < 20) {
    console.log(`you are a teenager`);
}
else if (age_of_person >= 20 && age_of_person < 65) {
    console.log(`you are a adult`);
}
else if (age_of_person >= 65) {
    console.log(`you are a elder`);
}
