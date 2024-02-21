let userName;
userName = prompt("what is your name")

if (userName == null || userName =="") {
    do {
        userName = prompt("plaese dont leave it blank enter your name")
    } while (userName == null || userName =="");
}
    document.write(`Hello ${userName} would you like to learn python`)