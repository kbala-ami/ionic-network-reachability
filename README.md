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
    async checkOnline() {
        try {
            const isOnline = IonicNetworkReachability.isReachable('url is optional');
            return isOnline;
        } catch(err) {
            
        }
    }
}
```