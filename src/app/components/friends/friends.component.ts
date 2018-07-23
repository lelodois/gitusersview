import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {UserService} from '../../provider/service/user.service';
import {Friend} from '../../provider/model/friend.model';
import {IFriendModal} from '../../provider/model/friend.interface';

declare var $: any;

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements AfterViewInit, IFriendModal {

    friends: Friend[] = [];
    friendModal = undefined;

    constructor(private eventsService: EventsService,
                private userService: UserService,
                private rootNode: ElementRef) {
    }

    findTopFriends(login: string) {
        this.userService.findTopFriends(login)
            .subscribe(response => {
                this.friends = response;
                this.showModal();
            });
    }

    ngAfterViewInit(): void {
        this.friendModal = $(this.rootNode.nativeElement).find('#friendModal');
    }

    closeModal() {
        this.friendModal.modal('hide');
    }

    showModal() {
        this.friendModal.modal('show');
    }
}
