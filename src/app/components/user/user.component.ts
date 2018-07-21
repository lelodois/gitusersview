import {Component} from '@angular/core';
import {IUserChanged} from '../../provider/model/iuserchanged.interface';
import {UserService} from '../../provider/service/user.service';
import {User} from '../../provider/model/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements IUserChanged {

    user: User = undefined;

    constructor(private userService: UserService) {
    }

    showNewUser(login: string) {
        this.userService.findByText(login)
            .subscribe(userResponse => this.user = userResponse);
    }

}
