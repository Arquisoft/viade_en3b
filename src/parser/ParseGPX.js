import Route from '../entities/Route.js';
import RouteElement from '../entities/RouteElement.js';
import { gpxParse } from "gpx-parse";

class ParseGPX {

    parse(name, file){

        let points = this.getPoints(file);

        return new Route(name, "", points,  [], [], new Date());
        
    }

    getPoints(file){
        
        let numTracks = file.tracks.length;

        var elements = [];

        var i = 0;
        var j = 0;

        for (i = 0; i < numTracks; i++) {

            var numPoints = gpxParse.tracks[i].points.length;

            for (j = 0; j < numPoints; j++) {

                let longitude = gpxParse.tracks[i].points[j].lon;
                let latitude = gpxParse.tracks[i].points[j].lat;
                let elevation = gpxParse.tracks[i].points[j].ele;
                elements.push(new RouteElement(longitude, latitude, "", elevation));

            }
        }

        return elements;

    }

}

export default ParseGPX;