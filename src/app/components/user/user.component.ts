import {Component, ViewChild} from '@angular/core';
import {IUserChanged} from '../../provider/model/user-changed.interface';
import {UserService} from '../../provider/service/user.service';
import {User} from '../../provider/model/user.model';
import {EventsService} from '../../provider/service/events.service';
import {IFriendModal} from '../../provider/model/friend.interface';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements IUserChanged {

    user: User = undefined;

    @ViewChild('friendModal')
    friendsComponent: IFriendModal;

    constructor(private userService: UserService,
                private eventService: EventsService) {
    }

    updatedUser(login: string) {
        this.userService.findByLogin(login)
            .subscribe(userLoaded => {
                this.user = userLoaded;
                this.eventService.userChangedEvent.emit(userLoaded);
                this.userService.putFriends(login);
            });
    }

    showFriends(login: string) {
        this.friendsComponent.findTopFriends(login);
    }
}
