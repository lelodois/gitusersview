import {Component, Input} from '@angular/core';
import {User} from '../../provider/model/user.model';

@Component({
    selector: 'app-user-foto',
    templateUrl: './user-foto.component.html',
    styleUrls: ['./user-foto.component.scss']
})
export class UserFotoComponent {

    @Input()
    user: User = undefined;

}
