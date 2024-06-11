import { Injectable } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IonicNetworkReachabilityService {

  // constructor() { }

  /**
   * @description it is used to ensure network connectivity
   * @param url `http-url-endpoint`
   * @returns return Promise<boolean> `true` or `false`, indicating network state
   */
  public async isReachable(url = 'https://httpbin.org/') {
      const result = await fetch(url);
      if (result.ok) {
        return true;
      } else {
        return false;
      }
    
  }

  /**
   * @description Get notified when the device goes offline
   * @param url `http-url-endpoint`
   * @returns Returns an Observable
   */
  public onConnect(url = 'https://httpbin.org/') {
    return fromEvent(window, 'online').pipe(
      switchMap(() => {
        return this.httpReq(url).pipe(
          catchError(() => {
            return of({
              ok: false,
            });
          }),
        );
      }),
      map((networkResult) => {
        if (networkResult.ok) {
          return true;
        } else {
          return false;
        }
      }),
    );
  }

  /**
   * @description Get notified when the device goes offline
   * @returns returns an Observable
   */
  public onDisconnect() {
    return fromEvent(window, 'offline').pipe(map(() => 'you are offline'));
  }

  private httpReq(url: string) {
    return from(fetch(url));
  }
  /**
   * @description it is used monitor network activity
   * @returns return observable.
   */
  // private monitorNetworkActivity() {
  //   return interval(1000).pipe(
  //     filter(x => {
  //       if (navigator.onLine) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }),
  //     switchMap(async isOnline => {
  //       try {
  //         const networkResult = await fetch('https://httpbin.org/');
  //         if (networkResult.ok) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       } catch (error) {
  //         return false;
  //       }
  //     }),
  //   );
  // }
}
