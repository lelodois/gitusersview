import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../model/user.model';

@Injectable()
export class EventsService {

    private readonly _userSearchEvent: EventEmitter<String> = new EventEmitter<String>(true);
    private readonly _userChangedEvent: EventEmitter<User> = new EventEmitter<User>(true);

    get userSearchEvent(): EventEmitter<String> {
        return this._userSearchEvent;
    }

    get userChangedEvent(): EventEmitter<User> {
        return this._userChangedEvent;
    }
}