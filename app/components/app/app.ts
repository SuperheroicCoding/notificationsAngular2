import {Component, COMMON_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {TestNotificationsCmp} from '../testNotifications/testNotifications';
import {OverlayCmp} from '../overlay/overlay';
import {NotificationCenterCmp} from '../notificationCenter/notificationCenter';

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES, OverlayCmp, NotificationCenterCmp]
})
@RouteConfig([
  {path: '/', component: TestNotificationsCmp, as: 'TestNotifications'}
])
export class AppCmp {
}
