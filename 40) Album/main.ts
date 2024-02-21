const make_album = (artist_name:string , album_title:string , tracks?:number)=>{

    let obj:{name:string , album:string , track?:number} = {
        name : artist_name,
        album : album_title,
    }
    if (tracks !== undefined) {
        obj.track = tracks
    }
    console.log(obj);
}
make_album('ammar','ammars album')
make_album('ayan','ayans album')
make_album('oneeb','oneebs album' , 12)