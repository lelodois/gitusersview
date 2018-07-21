import {User} from './user.model';

export class Repository {

    private _id: number;
    private _name: string;
    private _full_name: string;
    private _stargazers_count: number;
    private _description: string;
    private _clone_url: string;
    private _created_at: Date;
    private _updated_at: Date;
    private _language: string;

    private _owner: User;

    get owner(): User {
        return this._owner;
    }

    set owner(value: User) {
        this._owner = value;
    }

    get id(): number {
        return this._id;
    }

    get language(): string {
        return this._language;
    }

    get description(): string {
        return this._description;
    }

    get clone_url(): string {
        return this._clone_url;
    }

    get created_at(): Date {
        return this._created_at;
    }

    get stargazers_count(): number {
        return this._stargazers_count;
    }

    get name(): string {
        return this._name;
    }

    get updated_at(): Date {
        return this._updated_at;
    }

    get full_name(): string {
        return this._full_name;
    }
}



