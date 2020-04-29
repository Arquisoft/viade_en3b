class Media{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    toJsonMedia(routeName) {
        let newid = "viade/resources/" +noSpaces(routeName) + "3%40" + noSpaces(this.id)+".jsonld";
        this.id = newid;
        return {
            "@id": newid,
            "name": this.name,
        };
    }
}

function noSpaces(text){
    let regex = / /gi;
    return text.replace(regex, '%20')
}

export default Media;