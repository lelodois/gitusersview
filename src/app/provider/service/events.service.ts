import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventsService {

    private readonly _searchEvent: EventEmitter<String> = new EventEmitter<String>(true);

    get searchEvent(): EventEmitter<String> {
        return this._searchEvent;
    }
}