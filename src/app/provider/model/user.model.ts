export class User {

    private _login: string;
    private _id: number;
    private _avatar_url: string;
    private _gravatar_id: string;
    private _followers_url: string;
    private _following_url: string;
    private _name: string;
    private _bio: string;
    private _company: string;
    private _public_repos: number;
    private _location: string;
    private _followers: string;
    private _following: string;
    private _created_at: Date;

    /**
     starred_url: "https://api.github.com/users/A/starred{/owner}{/repo}",
     subscriptions_url: "https://api.github.com/users/A/subscriptions",
     organizations_url: "https://api.github.com/users/A/orgs",
     repos_url: "https://api.github.com/users/A/repos",
     events_url: "https://api.github.com/users/A/events{/privacy}",
     received_events_url: "https://api.github.com/users/A/received_events",
     **/

    set login(value: string) {
        this._login = value;
    }


    get login(): string {
        return this._login;
    }

    get id(): number {
        return this._id;
    }

    get avatar_url(): string {
        return this._avatar_url;
    }

    get gravatar_id(): string {
        return this._gravatar_id;
    }

    get followers_url(): string {
        return this._followers_url;
    }

    get following_url(): string {
        return this._following_url;
    }

    get name(): string {
        return this._name;
    }

    get bio(): string {
        return this._bio;
    }

    get company(): string {
        return this._company;
    }

    get public_repos(): number {
        return this._public_repos;
    }

    get location(): string {
        return this._location;
    }

    get followers(): string {
        return this._followers;
    }

    get following(): string {
        return this._following;
    }

    get created_at(): Date {
        return this._created_at;
    }
}