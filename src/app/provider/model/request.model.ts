export class MyRequest {

    private _login: string;
    private _ready: boolean;

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get ready(): boolean {
        return this._ready;
    }

    set ready(value: boolean) {
        this._ready = value;
    }
}