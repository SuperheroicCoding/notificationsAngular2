import {Component} from 'angular2/angular2';


@Component({
  selector: 'overlay',
  template: `<div class="overlayContainer"><ng-content></ng-content></div>`,
  styleUrls: ['./components/overlay/overlay.css']
})

/**
 * just a full size overlay. with transparent background.
 * Place your overlay elements inside the overlay e.g.
 *
 * ### Example
 * ```
 * <overlay>
 *     <div>This will be shown on the overlay<div>
 * </overlay>
 * ```
 */
export class OverlayCmp {
}
