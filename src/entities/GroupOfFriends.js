import { podHandler } from '../../../parser/PodHandler';
import { parser } from '../../../parser/parseToTurtle';

class GroupOfFriends {

    constructor(name, friends){

        this.name = name;
        this.friends = friends;

    }

    storeInPod(){

        var file = this.parseToTurtle();
        podHandler.storeGroup(file);

    }

    parseToTurtle(){

        return parser.parseToTurtle(this.name, this.friends);
        
    }

    getName(){

        return this.name;

    }

    getFriends(){

        return this.friends;

    }

}

export default GroupOfFriends;