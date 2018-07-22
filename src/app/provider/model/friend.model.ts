export class Friend {

    private _friendLogin: string;
    private _stars: number;
    private _friendFollower: boolean;

    get friendFollower(): boolean {
        return this._friendFollower;
    }

    set friendFollower(value: boolean) {
        this._friendFollower = value;
    }

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