const sandwich = (maal: string[])=>{
    let stuffing:any = []
    maal.forEach((maal)=> stuffing.push(maal))
    console.log("you ordered " + stuffing.join('-') + ' sandwich');
    console.log('your order is being ready\n');
    
    
}

sandwich(['bun' , 'kabab' , 'piyaz'])
sandwich(['bun' , 'aaloo' , 'timater'])
sandwich(['bun' , 'kabab' , 'piyaz'])
