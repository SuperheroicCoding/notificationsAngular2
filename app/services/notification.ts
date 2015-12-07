/**
 * the interface for our notifications
 */
export interface INotification {
  title:string;
  text:string;
  category:string;
}
/**
 * the data class for our notifications
 */
export class Notification implements INotification {
  /**
   *
   * @param title
   * @param text
   * @param category should be info, warning or error.
   */
  constructor(public title:string, public text:string, public category:string) {
  }
}
