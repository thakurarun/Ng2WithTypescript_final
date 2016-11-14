import { Injectable } from "@angular/core";
import * as model from './../models';

@Injectable()
export class AutheticationService {
    constructor(private _user: model.IUser) {
        this._user.isAuthenticated = false;
    }
    public isAuthenticate(): boolean {
        return this._user.isAuthenticated;
    }
    public getName(): string {
        return this._user.name;
    }

    authenticate() {
        if (this._user.username == "arun" && this._user.password == "arun") {
            this._user.isAuthenticated = true;
            this._user.name = "Arun Thakur";
        } else {
            this._user.isAuthenticated = false;
            this._user.name = "";
        }
    }
}