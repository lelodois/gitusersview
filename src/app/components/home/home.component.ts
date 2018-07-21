import {Component, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {IUserChanged} from '../../provider/model/user-changed.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @ViewChild('userComponent')
    private userComponent: IUserChanged;

    constructor(private eventsService: EventsService,
                private activatedRouter: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        if (this.activatedRouter.snapshot.params.login) {
            this.updateUser(this.activatedRouter.snapshot.params.login);
        }

        this.eventsService.userSearchEvent
            .subscribe(login => {
                this.updateUser(login);
            });
    }

    updateUser(login: string) {
        this.userComponent.updatedUser(login);
    }

}
