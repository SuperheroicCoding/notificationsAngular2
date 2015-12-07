import {EventEmitter, Injectable} from 'angular2/angular2';
import {INotification} from './notification';
import {Notification} from './notification';
/**
 * the notification service holds a list of all notifications.
 * Adding notifications will emit events.
 */
@Injectable()
export class NotificationService {
  public notificationsChanged:EventEmitter<Notification[]> = new EventEmitter<Notification[]>();
  public notificationAdded:EventEmitter<Notification> = new EventEmitter<Notification>();
  private notificationsList:INotification[] = [];

  /**
   * @param notification that will be added.
   * emits events for notificationsChanged and notificationsAdded
   */
  add(notification:INotification):void {
    this.notificationsList = [notification].concat(this.notificationsList);
    this.notificationAdded.emit(notification);
    this.notificationsChanged.emit(this.notificationsList);
  }

  /**
   * @param notification to remove from list.
   * notificationsChanged event is emitted
   */
  remove(notification:INotification):void {
    this.notificationsList = this.notificationsList.filter(elem => elem !== notification);
    this.notificationsChanged.emit(this.notificationsList);
  }
}
