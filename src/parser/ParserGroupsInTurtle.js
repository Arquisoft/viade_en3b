

class ParserGroupsInTurtle {
    
    parseToTurtle(name, friends){    
        
        var str = '';
        str +=('@prefix : <#>.');
        str +=('@prefix schema: <http://schema.org/>.');
        str +=('@prefix viade: <http://arquisoft.github.io/viadeSpec/>.');
        str +=('@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.');
        str +=('@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.');

        str +=(':myRoute a viade:GroupOfFriends;');
        str +=('schema:name "');
        str +=(name);
        str +=('";');
    
        friends.forEach(friend => {
            str +=('schema:friend ');
            str +=(friend);
            str +=(';');
        });

        return str;
    }

    parseFromTurtle(file){



    }
    
}

export default ParserGroupsInTurtle;