export class User {
    get followers(): string {
        return this._followers;
    }

    set followers(value: string) {
        this._followers = value;
    }

    get following(): string {
        return this._following;
    }

    set following(value: string) {
        this._following = value;
    }

    get company(): string {
        return this._company;
    }

    set company(value: string) {
        this._company = value;
    }

    get public_repos(): number {
        return this._public_repos;
    }

    set public_repos(value: number) {
        this._public_repos = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

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

    /**
     starred_url: "https://api.github.com/users/A/starred{/owner}{/repo}",
     subscriptions_url: "https://api.github.com/users/A/subscriptions",
     organizations_url: "https://api.github.com/users/A/orgs",
     repos_url: "https://api.github.com/users/A/repos",
     events_url: "https://api.github.com/users/A/events{/privacy}",
     received_events_url: "https://api.github.com/users/A/received_events",
     **/

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get avatar_url(): string {
        return this._avatar_url;
    }

    set avatar_url(value: string) {
        this._avatar_url = value;
    }

    get gravatar_id(): string {
        return this._gravatar_id;
    }

    set gravatar_id(value: string) {
        this._gravatar_id = value;
    }

    get followers_url(): string {
        return this._followers_url;
    }

    set followers_url(value: string) {
        this._followers_url = value;
    }

    get following_url(): string {
        return this._following_url;
    }

    set following_url(value: string) {
        this._following_url = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get bio(): string {
        return this._bio;
    }

    set bio(value: string) {
        this._bio = value;
    }
}