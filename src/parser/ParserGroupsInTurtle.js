import SparqlFiddle from "./sparq-fiddle";
import GroupOfFriends from "../entities/GroupOfFriends";

class ParserGroupsInTurtle {

    
    parseToTurtle(name, friends){    
        
        var str = '';
        str +=('@prefix : <#>.');
        str +=('@prefix schema: <http://schema.org/>.');
        str +=('@prefix viade: <http://arquisoft.github.io/viadeSpec/>.');
        str +=('@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.');
        str +=('@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.');

        str +=(':myGroup a viade:GroupOfFriends;');
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

    async parseFromTurtle(url){

        let sparqlfiddle = new SparqlFiddle();

        var query =
            `PREFIX schema: <http://schema.org/>
             PREFIX viade: <http://arquisoft.github.io/viadeSpec/>
             PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            
             SELECT ?name ?friend WHERE {
             ?myGroup a viade:GroupOfFriends.
             ?name schema:name.
             ?friend schema:friend.
            }`;

            let fiddle = {
                data: url,
                query: query,
                wanted: "Array"
              };

            const result = await sparqlfiddle.run(fiddle).then(
                results => {
                  return results;
                },
                err => console.log(err)
              );
              return this.arrayToGroupOfFriends(result);
        }

        arrayToGroupOfFriends = result => {
            return new GroupOfFriends(
                result[0]["name"],
                result[0]["friends"]
            );
      };
    
}

export default ParserGroupsInTurtle;