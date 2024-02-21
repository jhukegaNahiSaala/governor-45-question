"use strict";
let people_to_Invite = ["Ayan", "Oneeb", "Affan"];
// for (const iterator of people_to_Invite) {
//    console.log(`Hello ${iterator} I'm really excited to tell you that I have arrange dinner for you so please come tomorrow at 10:00pm sharp\nregards Ammar\n`)
// }
let absent_guest = 'Oneeb';
console.log(`well because of some problem ${absent_guest} said me that he can not make it to the party.`);
let new_guest = 'ahmer';
people_to_Invite[people_to_Invite.indexOf(absent_guest)] = new_guest;
for (const iterator of people_to_Invite) {
    console.log(`Hello ${iterator} please come tomorrow at 10:00pm sharp for dinner\nregards Ammar\n`);
}
console.log('hey I just found a bigger dinner table so I am going to invite three more people , it will be fun');
// adding more new guests
people_to_Invite.unshift('Armash');
people_to_Invite.push('Abu Bakar');
people_to_Invite.splice(Math.ceil(people_to_Invite.length / 2), 0, 'ammar');
// console.log(people_to_Invite);
for (const iterator of people_to_Invite) {
    console.log(`Hello ${iterator} please come tomorrow at 10:00pm sharp for dinner it will be fun \nregards Ammar\n`);
}
