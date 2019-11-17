import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'angular-banco-mundial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regiones del mundo';

  constructor(private swUpdate: SwUpdate, private swPush: SwPush) {
    this.checkVersionUpdates();
    // this.subscribeToNotifications();
   }

   private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `Nueva versión ${appData.version} disponible.`;
          msg += `${appData.changelog}.`;
          msg += 'Recargamos?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }

  /**
   * Necesitamos un servidor externo que emita las notificaciones
   */
  private subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })
        .then(sub => {
          console.log('subscription to server', sub.toJSON());
          this.swPush.messages.subscribe(msg => console.log('Received: ', msg));
        })
        .catch(err => console.error('Could not subscribe', err));
    }
  }
}
