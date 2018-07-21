import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private eventsService: EventsService) {

    }

    ngOnInit(): void {
        this.eventsService.searchEvent
            .subscribe(text => {
                alert(text);
            });
    }


}
