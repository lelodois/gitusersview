export class Friend {

    private _friendLogin: string;
    private _stars: number;

    get friendLogin(): string {
        return this._friendLogin;
    }

    set friendLogin(value: string) {
        this._friendLogin = value;
    }

    get stars(): number {
        return this._stars;
    }

    set stars(value: number) {
        this._stars = value;
    }
}