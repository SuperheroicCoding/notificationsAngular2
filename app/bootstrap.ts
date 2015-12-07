import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
import {NotificationService} from './services/notificationService';
import {NotificationRemoveTimer} from './services/notificationTimer';

/**
 * boostrap our app and register dependencies
 */
bootstrap(AppCmp, [NotificationRemoveTimer, NotificationService,
  provide(APP_BASE_HREF, {useValue: '<%= APP_BASE + APP_DEST %>'}),
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
