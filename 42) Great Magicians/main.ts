let magicions_name: string[] = ["ayan" , "oneeb" , "ammar" , "affan"]

const show_magicians =(magitions_name: string[])=>{
    for (const i of magitions_name) {
        console.log(i)
    }
}
show_magicians(magicions_name)

const make_great =(magicions_name:string[])=>{
    debugger;
    for (let i  in magicions_name) {
        magicions_name[i] = `the Great ${magicions_name[i]}`
    }
    console.log(magicions_name);
}
make_great(magicions_name)