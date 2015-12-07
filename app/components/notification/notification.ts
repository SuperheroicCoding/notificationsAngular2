import {Component, Input, Output} from 'angular2/angular2';
import {EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'notification',
  templateUrl: './components/notification/notification.html',
  styleUrls: ['./components/notification/notification.css']
})

/**
 * displays a notification. With different styles for category 'info','warning','error'.
 *
 * ###Example
 *
 * ```
 * <notification
 * [title]="note.title"
 * [text]="note.text"
 * [category]="note.category"
 * (remove)="removeNotification(note)">
 * </notification>
 * ```
 **/
export class NotificationCmp {
  @Input() title:string;
  @Input() text:string;
  @Input() category:string;
  @Output() remove = new EventEmitter<string>();

  /**
   * emits the remove event.
   */
  removeNotification() {
    this.remove.emit('removeEvent');
  }

}
