import GroupOfFriends from "../entities/GroupOfFriends";

class ParserJsonLdToGroupOfFriends {
    
    parse(file){    
        var group = JSON.parse( file );

        var name = group.name;
        var users = group.users;
        
        let friends = this.parseFriends(users);

        
        return new GroupOfFriends(name, friends);
    }

    parseFriends(users) {
        let friends = [];
        for(var i = 0; i < users.length; i++ ){
            friends.push(users[i].url);
        }
        return friends;
    }
}

export default ParserJsonLdToGroupOfFriends;