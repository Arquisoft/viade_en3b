import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

export async function loadAllNotifications() {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedNotifications = storageHandler.findAllNotifications();
    return loadedNotifications;
}

export async function storeNewNotification(friend, route){
        let storageHandler = new PodHandler(await auth.currentSession());
        storageHandler.storeNewNotification(friend, route);
}

export default async function storeNewRoute(friend, route){
     let storageHandler = new PodHandler(await auth.currentSession());
        storageHandler.shareRouteWithFriend(friend, route);
}