# Ionic Network Reachability

Ionic Network Reachability, it is used for `testing` network connection.

### Ionic Network Reachability

```bash
npm install ionic-network-reachability --save
```

# Usage

app.component.ts

```ts
import { IonicNetworkReachability } from 'ionic-network-reachability';

export class AppComponent {

    constructor(private reachability: IonicNetworkReachability) {}

    async checkOnline() {
        try {
            const isOnline = await this.reachability.isReachable('url is optional');
            return isOnline;
        } catch(err) {
            
        }
    }

    monitoringOnlineEvents(url: string) {
        this.reachability.onConnect('url is optional').subscribe((value: boolean) => {
            console.log('online :)');
        });
    }

    monitoringOfflineEvents() {
        this.reachability.onDisconnect().subscribe(() => {
            console.log('offline :(')
        });
    }
}
```