import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

export async function loadAllNotifications() {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedNotifications = storageHandler.findAllNotifications();
    return loadedNotifications;
}