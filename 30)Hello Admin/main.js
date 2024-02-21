"use strict";
let user_names = ['Ammar', 'Ayan', 'Oneeb', 'Affan', 'Admin'];
for (const i of user_names) {
    if (i == 'Admin') {
        console.log(`Hello Mr ${i} how are you would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${i} how are you`);
    }
}
