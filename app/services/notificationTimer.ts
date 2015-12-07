import {Injectable} from 'angular2/angular2';
import {NotificationService} from './notificationService';
import {INotification} from './notification';

/**
 * Handles removing of notification after timeout.
 *
 */
@Injectable()
export class NotificationRemoveTimer {
  private static DEFAULT_TIMEOUT = 90000;

  constructor(private notificationService:NotificationService) {
    console.log('Is observable???', notificationService.notificationAdded);
  }

  /**
   * starts removing of notifications after timeout.
   * @param timeoutInMs
     */
  subscribeToAddedNotifications(timeoutInMs?:number) {
    var removeTimeout = timeoutInMs ? timeoutInMs : NotificationRemoveTimer.DEFAULT_TIMEOUT;
    this.notificationService.notificationAdded.subscribe((notification:INotification) => this.removeAfterTimeout(notification,removeTimeout));
  }

  private removeAfterTimeout(notification:INotification, timeout:number) {
    setTimeout(() => this.notificationService.remove(notification), timeout);
  }
}
