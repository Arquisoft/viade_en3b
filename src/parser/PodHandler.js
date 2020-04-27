import ParserJsonLdToRoute from "./ParserJsonLdToRoute";

import ParserJsonLdToGroupOfFriends from "./ParserJsonLdToGroupOfFriends";
//import ParserGroupsInTurtle from "./ParserGroupsInTurtle";
import { findDOMNode } from "react-dom";

const auth = require('solid-auth-client');
const FC = require('solid-file-client');
const fc = new FC(auth);
const parser = new ParserJsonLdToRoute();
const parseGroups = new ParserJsonLdToGroupOfFriends();
//const groupsParser = new ParserGroupsInTurtle();

class PodHandler {

    constructor(session) {
        this.session = session;

        this.pod = session.webId.split("profile")[0];
        this.viadeFolder = "viade/";

        this.defaultFolder = this.pod + this.viadeFolder;

        this.routesFolder = "routes/";
        this.resourcesFolder = "resources/"; // for photos and videos 
        this.commentsFolder = "comments/";
        this.addressBook = this.pod + "groups/"; // for friends' groups
        this.notificationsURL = "sharedRoutes.json";
    }

    getRoutes

    storeRoute(fileName, routeJson, callback = () => { }) {
        let url = this.defaultFolder + this.routesFolder + fileName;
        this.storeFile(url, routeJson, callback);
    }

    storeGroup(group){
        let url = this.addressBook;
        this.storeFile(url, group);
    }

    storeFile(url, data, callback) {
        let response = fc.createFile(url, data);
        // let successCode = null;
        response.then(
            (response) => { callback(0); }
            , (error) => { callback(-1); }
        );
        // return successCode;
    }

    async storeMedia(mediaList, routename,callback = () => { }) {
        if (!mediaList.length) {
            return Promise.reject('No media to upload');
        }
        if (!validMediaType(mediaList)) {
            return Promise.reject('Media must be image or video');
        }

        let url = this.defaultFolder + this.resourcesFolder;

        let buildPath = '';
        Array.from(mediaList).forEach(file => {
            buildPath = url + routename + "@" + file.name ;
            this.storeFile(buildPath,file, callback);
        });
    }

    async findAllGroups(){
        let url = this.addressBook;
        var groups = [];
        if (await fc.itemExists(url)) {
            try {
                let contents = await fc.readFolder(url);
                let files = contents.files;

                for (let i = 0; i < files.length; i++) {
                    // let fileContent = await fc.readFile(files[i].url);
                    // groups.push(groupsParser.parse(fileContent));
                    //groups.push(groupsParser.parse(files[i].url));
                    groups.push(parseGroups.parse(files[i].url));
                }

            } catch (error) {
                // console.log("##### ERROR #####");
                // console.log(error);         // A full error response 
                // console.log(error.status);  // Just the status code of the error
                // console.log(error.message); // Just the status code and statusText
            }
        } else {
            console.log("There is no address-book directory");
        }
    }

    async findAllRoutes() {
        let url = this.defaultFolder + this.routesFolder;

        var routes = [];
        
        if (await fc.itemExists(url)) {
            try {
                let contents = await fc.readFolder(url);
                let files = contents.files;

                for (let i = 0; i < files.length; i++) {
                    let fileContent = await fc.readFile(files[i].url);
                    routes.push(parser.parse(fileContent));
                }

            } catch (error) {
                // console.log("##### ERROR #####");
                // console.log(error);         // A full error response 
                // console.log(error.status);  // Just the status code of the error
                // console.log(error.message); // Just the status code and statusText
            }
        } else {
            console.log("There is no routes directory");
        }

        // console.log("RUTAS");
        // console.log(routes);

        return routes;
    }

    async findAllNotifications() {
        let url = this.defaultFolder + this.notificationsURL;

        var notifications = [];
        
        if (await fc.itemExists(url)) {
            try {
               let fileContent = await fc.readFile(url);
                notifications = parser.parseNotifications(fileContent);

            } catch (error) {
                // console.log("##### ERROR #####");
                // console.log(error);         // A full error response 
                // console.log(error.status);  // Just the status code of the error
                // console.log(error.message); // Just the status code and statusText
            }
        } else {
            console.log("There is no notifications file");
        }

        // console.log("RUTAS");
        // console.log(routes);

        return notifications;
    }
}

    const mediaType = {
        image: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
        video: /\.(mp4|webm|ogg)$/i
    }

    function validMediaType(mediaList) {
        let valid = true;

        mediaList.forEach(file => {
            if (!(mediaType.image.test(file.name) || mediaType.video.test(file.name))) {
                valid = false;
            }
        });

        return valid;
    }



export default PodHandler;