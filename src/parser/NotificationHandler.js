import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

export async function loadAllNotifications() {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedNotifications = storageHandler.findAllNotifications();
    return loadedNotifications;
}

export default async function storeNewNotification(friend, route){
        let storageHandler = new PodHandler(await auth.currentSession());
        storageHandler.storeNewNotification(friend, route);
}