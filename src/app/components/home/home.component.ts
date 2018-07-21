import {Component, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {IUserChanged} from '../../provider/model/iuserchanged.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @ViewChild('userComponent')
    private userComponent: IUserChanged;

    constructor(private eventsService: EventsService) {
    }

    ngOnInit(): void {
        this.eventsService.searchEvent
            .subscribe(text => {
                this.userComponent.showNewUser(text);
            });
    }


}
