import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup} from 'angular2/angular2';
import {NotificationService} from '../../services/notificationService';
import {NotificationCmp} from '../notification/notification';
import {Notification} from '../../services/notification';

@Component({
  selector: 'testNotifications',
  templateUrl: './components/testNotifications/testNotifications.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NotificationCmp],
  styleUrls: ['./components/testNotifications/testNotifications.css']
})
/**
 * provides a form to add notifications to the NotificationService.
 */
export class TestNotificationsCmp {
  public static titleMaxLength = 25;
  public static textMaxLength = 150;

  public notificationsForm:ControlGroup;


  constructor(private formBuilder:FormBuilder, private notificationService:NotificationService) {
    this.initForm();
  }

  private initForm() {
    //the formBuilder is used to register validation
    this.notificationsForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.maxLength(TestNotificationsCmp.titleMaxLength), Validators.required])],
      text: ['', Validators.compose([Validators.maxLength(TestNotificationsCmp.textMaxLength), Validators.required])],
      category: ['info', Validators.required]
    });
  }

  /**
   * @returns false to prevent default form submit behavior to refresh the page.
   */
  addNotification():boolean {
    var controls = this.notificationsForm.controls;
    var notificationToAdd = new Notification(controls['title'].value, controls['text'].value, controls['category'].value);
    this.notificationService.add(notificationToAdd);
    return false;
  }
}
