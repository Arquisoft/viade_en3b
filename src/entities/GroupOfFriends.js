import  podHandler from '../parser/PodHandler.js';
//import { parser } from '../../../parser/parseToTurtle';

class GroupOfFriends {

    constructor(name, friends){

        this.name = name;
        this.friends = friends;

    }

    storeInPod(){

       // var file = this.parseToTurtle();
       var file = this.getJsonLD();
        podHandler.storeGroup(file);

    }

  //  parseToTurtle(){

    //    return parser.parseToTurtle(this.name, this.friends);
        
   // }

    getName(){

        return this.name;

    }

    getFriends(){

        return this.friends;

    }

    getFriendsJsonLD(){

        let friendsUrl = [];
        this.friends.forEach((f) => {
            friendsUrl.push({
                "url": f
              });
        });

    }


    getJsonLD() {
        return JSON.stringify(
            {
                "@context": {
                  "@version": 1.1,
                  "users": {
                    "@container": "@list",
                    "@id": "schema:Person"
                  },
                  "name": {
                    "@id": "schema:name",
                    "@type": "xs:string"
                  },
              "url": {
                    "@id": "schema:url",
                    "@type": "xs:string"
                  },
                    "schema": "http://schema.org/",
                    "viade": "http://arquisoft.github.io/viadeSpec/",
                    "xsd": "http://www.w3.org/2001/XMLSchema#"
                },
                "name": this.name,
                "users": this.getFriendsJsonLD()
            }
        );
    }

}

export default GroupOfFriends;