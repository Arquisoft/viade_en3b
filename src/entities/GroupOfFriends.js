import { podHandler } from '../../../parser/PodHandler';
import { parser } from '../../../parser/parseToTurtle';

class GroupOfFriends {

    constructor(name, friends){
        this.name = name;
        this.friends = friends;

        this.file = this.parseToTurtle();
        podHandler.storeGroup(this.file);

    }

    parseToTurtle(){

        return parser.parse(this.file);
        
    }

    getName(){

        return this.name;

    }

    getFriends(){

        return this.friends;
        
    }

}

export default GroupOfFriends;