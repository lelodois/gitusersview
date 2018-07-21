export class Repository {

    private _id: number;
    private _name: string;
    private _full_name: string;
    private _stargazers_count: number;

    get id(): number {
        return this._id;
    }


    get stargazers_count(): number {
        return this._stargazers_count;
    }

    get name(): string {
        return this._name;
    }

    get full_name(): string {
        return this._full_name;
    }
}



