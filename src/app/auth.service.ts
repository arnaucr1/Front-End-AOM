/* //import { BehaviorSubject }          from 'rxjs/BehaviorSubject';
//import { Observable }               from 'rxjs/Observable';
import { DOCUMENT, Location }                 from '@angular/common';
import { Inject, Injectable }       from '@angular/core';
import { ActivatedRoute,RouterStateSnapshot,ActivatedRouteSnapshot, Params }           from '@angular/router';
import { environment }                      from '../environments/environment';
import * as jwt_decode from "jwt-decode";

import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    constructor() {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("Can Activate?")

        console.log(route)
        console.log("STATE:")
        console.log(state)
        // alert(state.url)

        // alert(route.queryParams.token)
        // mirem si ens envien al token per url
        if (route.queryParams['token'] != undefined) {
            // alert("tenim toquen a url")
            localStorage.setItem('edu360-token', route.queryParams['token']);
            let decoded = this.getDecodedAccessToken(route.queryParams['token']);
            console.log(decoded);
            localStorage.setItem('edu360-user',         JSON.stringify(decoded.payload['user']));
            localStorage.setItem('edu360-personLogged', JSON.stringify(decoded.payload['person']));
            localStorage.setItem('edu360-werpRoles', JSON.stringify(decoded.payload['werpRoles']));
            // localStorage.setItem('edu360-laboralManagerSchools',JSON.stringify(Response['data']['Schools']));
            // localStorage.setItem('edu360-token',                Response['data']['token']);
            // localStorage.setItem('edu360-werpConfig',           JSON.stringify(decoded.payload['werpConfig']));

            // todo : remove tokem from url
        }

        // Es comprova si hi ha token desat al Localstorage per a redirigir al Login
        if (localStorage.getItem('edu360-token') == undefined) {
                    // alert("no tenim token local storage")
                    window.location.href = 'http://' + environment.loginHost + '?continue=http://' + window.location.host;
            return false;
        }
        else {
          // hem de mirar si el token existent ja ha expirat
          // alert("tenim token desat")
          console.log("Mirem si el token a localStorage ha expirat.");
          console.log("moment actual:");
          var current_time = Date.now() / 1000;
          console.log(current_time);
          let decoded = this.getDecodedAccessToken(localStorage.getItem('edu360-token'));
          console.log(decoded.exp);
          if ( decoded.exp < current_time) {
              alert("Sessió caducada.");
              window.location.href = 'http://' + environment.loginHost + '?continue=' + window.location.href;
              return false;
            }
          // si hem arribat aquí és que tot està en ordre.
          return true;
        }
    }

    getDecodedAccessToken(token: string): any {
      console.log("geting token from localStorage")
      try{
        return jwt_decode(token);
      }
      catch(Error){
        return null;
      }
    }
}*/