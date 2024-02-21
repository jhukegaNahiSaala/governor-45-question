let userName;
userName = prompt("what is your full Name")

if (userName == null || userName =="") {
    do {
        userName = prompt("plaese dont leave it blank enter your name")
    } while (userName == null || userName =="");
}
    document.write(`your name in Upper case ${userName.toUpperCase()} <br>`)
    document.write(`your name in lower case ${userName.toLowerCase()}<br>`)
    document.write(`your name in title case ${userName.split(" ").map(str=> str[0].toUpperCase() + str.slice(1)).join(" ")}`)