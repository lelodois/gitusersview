import {Component} from '@angular/core';
import {IUserChanged} from '../../provider/model/iuserchanged.interface';
import {UserService} from '../../provider/service/user.service';
import {User} from '../../provider/model/user.model';
import {EventsService} from '../../provider/service/events.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements IUserChanged {

    user: User = undefined;

    constructor(private userService: UserService,
                private eventService: EventsService) {
    }

    updatedUser(login: string) {
        this.userService.findByText(login)
            .subscribe(userLoaded => {
                this.user = userLoaded;
                this.eventService.userChangedEvent.emit(userLoaded);
            });
    }

}
