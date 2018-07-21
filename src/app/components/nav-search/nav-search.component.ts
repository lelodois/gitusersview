import {Component} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';

@Component({
    selector: 'app-search',
    templateUrl: './nav-search.component.html',
    styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent {

    constructor(private _eventsService: EventsService) {
    }

    emitSearch(text: String) {
        this._eventsService.searchEvent.emit(text);
    }
}
