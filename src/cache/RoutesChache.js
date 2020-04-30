import { loadAllRoutes, shareRoute, loadAllSharedRoutes } from '../parser/RouteHandler';
import { loadAllNotifications } from '../parser/NotificationHandler';

export default {
    routes: [],
    notifications: [],
    sharedRoutes: [],
    selected: "",
    addRouteToCache(route) {
        if(route && !this.routes.find((obj) => route.name === obj.name)) {
            this.routes.push(route);
            // console.log("ROUTE ADDED TO CACHE");
        } else {
            alert("ERROR TRYING TO ADDROUTE TO CACHE");
        }
    }, 
    async getRoutesFromPod() {
        if (this.routes.length === 0) {
            this.routes = await loadAllRoutes();
            // console.log("ROUTES FROM POD (CACHE)");
            // console.log(this.routes);
        }
        return this.routes;
    },
    getRoutesFromCache() {
        // console.log("ROUTES FROM CACHE");
        // console.log(this.routes);
        this.getRoutesFromPod();
        return this.routes;
    },
    clear() {
        this.routes = [];
        this.selected = null;
    },
    async getNotificationFromPod() {
        if (this.notifications.length === 0) {
            this.notifications = await loadAllNotifications();
        }
        return this.notifications;
    },
    getNotificationFromCache() {
        // console.log("ROUTES FROM CACHE");
        // console.log(this.routes);
        this.getNotificationFromPod();
        return this.notifications;
    },
    removeNotification(notification){
        var filteredNotifications = this.notifications.filter(function(value, index, arr){ return value != notification;});
        this.notifications = filteredNotifications;
    },
    addSharedRoute(notification) {
        shareRoute(notification);
       // this.getSharedRoutesFromPod();
       // this.sharedRoutes.push(notification);
        this.removeNotification(notification);
    },
    async getSharedRoutesFromPod(){
        if (this.sharedRoutes.length === 0) {
            this.sharedRoutes = await loadAllSharedRoutes();
            // console.log("SHARED ROUTES FROM POD (CACHE)");
            // console.log(this.sharedRoutes);
        }
        return this.sharedRoutes;
    }
};