import { KeycloakService } from 'keycloak-angular';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';
import { ConfigInitService } from './config-init.service';

export function initializeKeycloak(
  keycloak: KeycloakService,
  configService: ConfigInitService
) {
  return () =>
    configService
      .getConfig()
      .pipe(
        switchMap<any, any>((config) => {
          return fromPromise(
            keycloak.init({
              config: {
                realm: 'cocimex',
                url: 'https://keycloak.cocimexanpilot.org/auth',
                // "ssl-required": "external",
                // resource: "react-web-app",
                clientId: 'cocimex-front-app',
                // "public-client": true,
                // "verify-token-audience": true,
                // "use-resource-role-mappings": true,
                // "confidential-port": 0,
              },
            })
          );
        })
      )
      .toPromise();
}
