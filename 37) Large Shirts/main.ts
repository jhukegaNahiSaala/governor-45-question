//@ts-ignore

const make_shirt = (size ='large' , textYouWantToPrintOnShirt = 'I love typescript')=> {
    if (size !== 'large' && size !== 'medium') {
        console.log(`you have choosed ${size} size`);
    } else{
        console.log(textYouWantToPrintOnShirt);
    }
}

make_shirt()