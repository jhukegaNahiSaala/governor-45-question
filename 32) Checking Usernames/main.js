"use strict";
let current_users = ['Ammar', 'Ayan', 'Oneeb', 'Affan', `Ahmer`];
let new_users = [`Armash`, `Ayan`, `Oneeb`, `Ahmer`, `Abu Bakar`];
let inCaseSensitiveNewUser;
let inCaseSensitiveCurrentUser;
for (const i in current_users) {
    inCaseSensitiveNewUser = (new_users[i]).toLocaleLowerCase();
    inCaseSensitiveCurrentUser = (current_users[i]).toLocaleLowerCase();
    if (inCaseSensitiveCurrentUser === inCaseSensitiveNewUser) {
        console.log(`Sorry this username is not available ${new_users[i]} please enter another name`);
    }
    else {
        console.log('this name is available');
    }
}
