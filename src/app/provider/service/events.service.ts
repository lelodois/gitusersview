import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../model/user.model';

@Injectable()
export class EventsService {

    private readonly _userSearchEvent: EventEmitter<String> = new EventEmitter<String>(true);
    private readonly _userChangedEvent: EventEmitter<User> = new EventEmitter<User>(true);
    private readonly _toLoadFriends: EventEmitter<String> = new EventEmitter<String>(false);

    get userSearchEvent(): EventEmitter<String> {
        return this._userSearchEvent;
    }

    get userChangedEvent(): EventEmitter<User> {
        return this._userChangedEvent;
    }

    get toLoadFriends(): EventEmitter<String> {
        return this._toLoadFriends;
    }
}