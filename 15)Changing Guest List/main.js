"use strict";
let people_to_Invite = ["Ayan", "Oneeb", "Affan"];
for (const iterator of people_to_Invite) {
    console.log(`Hello ${iterator} I'm really excited to tell you that I have arrange dinner for you so please come tomorrow at 10:00pm sharp\nregards Ammar\n`);
}
let absent_guest = 'Oneeb';
console.log(`well because of some problem ${absent_guest} said me that he can not make it to the party.\n\n`);
let new_guest = 'ahmer';
people_to_Invite[people_to_Invite.indexOf(absent_guest)] = new_guest;
for (const iterator of people_to_Invite) {
    console.log(`Hello ${iterator} please come tomorrow at 10:00pm sharp for dinner\nregards Ammar\n`);
}
