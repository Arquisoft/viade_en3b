import Route from '../entities/Route.js';
import RouteElement from '../entities/RouteElement.js';
import Media from "../entities/Media.js";

class ParserJsonLdToRoute {
    
    parse(file){    
        var route = JSON.parse( file );

        var name = route.name;
        var description = route.description;
        var date = route.date;
        var points = route.points;
        var comments = [];
        var media = route.media.map(element => new Media(element["@id"],element.name));
        
        let routeElements = this.parsePoints(points);

        return new Route(name, description, routeElements, comments, media, new Date(date));
    }

    parsePoints(points) {
        let routeElements = [];
        for(var i = 0; i < points.length; i++ ){
            routeElements.push(new RouteElement(points[i].latitude, points[i].longitude,points[i].elevation));
        }
        return routeElements;
    }

    parseNotifications(file){    
        var content = JSON.parse( file );
        var routes = content.routes;

        var notifications = this.getContent(routes);

        return notifications;
    }

    getContent(routes){
        var notifications = [];
        for(var i = 0; i < routes.length ; i++){
            notifications.push(routes[i]);
        }
        return notifications;
    }

}

export default ParserJsonLdToRoute;