import { AutheticationService } from './services/index';
export abstract class BaseComponent {
    constructor(private _authService: AutheticationService) {
    }

    protected get IsAuthenticate(): boolean {
        return this._authService.isAuthenticate();
    }
}