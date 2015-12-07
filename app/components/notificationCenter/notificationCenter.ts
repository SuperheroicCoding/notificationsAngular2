import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {INotification} from '../../services/notification';
import {NotificationCmp} from '../notification/notification';
import {NotificationService} from '../../services/notificationService';
import {NotificationRemoveTimer} from '../../services/notificationTimer';

@Component({
  selector: 'notification-center',
  templateUrl: './components/notificationCenter/notificationCenter.html',
  styleUrls: ['./components/notificationCenter/notificationCenter.css'],
  directives: [CORE_DIRECTIVES, NotificationCmp]
})

/**
 * Shows all notifications of the NotificationService.
 * Concatenates notifications in one row if there are more than 'concatenateNotificationsAfter' notifications.
 * Removes them after a timeout.
 *
 * ### Example
 * ```
 * <notification-center concatenate-notifications-after="5" remove-notifications-after-ms="10000">
 * </notification-center>
 * ```
 **/
export class NotificationCenterCmp {
  @Input() concatenateNotificationsAfter:number;
  @Input() removeNotificationsAfterMs:number;
  public firstNotifications:INotification[] = [];
  public lastNotifications:INotification[] = [];

  /**
   * @param notificationService
   * @param notificationRemoveTimer
   */
  constructor(private notificationService:NotificationService, private notificationRemoveTimer:NotificationRemoveTimer) {
    notificationService.notificationsChanged.subscribe((allNotifications:INotification[]) => {
      this.splitAllNotificationsIntoFirstAndLastLists(allNotifications);
    });
  }

  /**
   * livecycle hook
   */
  ngAfterContentInit() {
    this.registerRemoveNotificationTimer();
  }

  public removeNotification(notification: INotification){
    this.notificationService.remove(notification);
  }

  private registerRemoveNotificationTimer() {
    this.notificationRemoveTimer.subscribeToAddedNotifications(this.removeNotificationsAfterMs);
  };

  private splitAllNotificationsIntoFirstAndLastLists(allNotifications) {
    if (allNotifications.length > this.concatenateNotificationsAfter) {
      this.firstNotifications = allNotifications.slice(0, this.concatenateNotificationsAfter - 1);
      this.lastNotifications = allNotifications.slice(this.concatenateNotificationsAfter - 1, allNotifications.length);
    } else {
      this.firstNotifications = allNotifications;
      this.lastNotifications = [];
    }
  }
}

