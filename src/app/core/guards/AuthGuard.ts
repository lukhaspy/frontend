import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {
    constructor(private router: Router) { }

    redirect(flag: any): any {
        if (!flag) {
            this.router.navigate(['/', 'login'])
        }
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = localStorage.getItem('token') ? true : false
        this.redirect(token)
        return token
    }
}