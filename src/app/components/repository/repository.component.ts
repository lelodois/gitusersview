import {Component, OnInit} from '@angular/core';
import {User} from '../../provider/model/user.model';
import {EventsService} from '../../provider/service/events.service';

@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

    user: User = undefined;

    constructor(private eventsService: EventsService) {
    }

    ngOnInit(): void {
        this.eventsService.userChangedEvent
            .subscribe(userChanged => this.user = userChanged);
    }

}
