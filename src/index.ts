import { interval } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
export class IonicNetworkReachability {
  public isOnline: boolean;
  constructor() {
    this.isOnline = navigator.onLine;
  }
  /**
   * @description it is used to ensure network connectivity
   * @param url `http-url`
   * @returns return boolean `true` or `false`, indicating network state
   */
  public async isReachable(url: string = 'https://httpbin.org/') {
    try {
      const result = await fetch(url);
      if (result.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * @description it is used monitor network activity
   * @returns return observable.
   */
  public monitorNetworkActivity() {
    return interval(1000).pipe(
      filter(x => {
        if (navigator.onLine) {
          return true;
        } else {
          return false;
        }
      }),
      switchMap(async isOnline => {
        try {
          const networkResult = await fetch('https://httpbin.org/');
          if (networkResult.ok) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      }),
    );
  }
}
