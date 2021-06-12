import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";

@Injectable({
  providedIn: "root",
})

export class AuthGuard implements CanLoad {
  authstatus: any;

  constructor() {}

  canLoad(): boolean {
    this.authstatus=true

    return this.authstatus;
  }
}
