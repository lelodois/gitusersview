import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {UserService} from '../../provider/service/user.service';
import {Friend} from '../../provider/model/friend.model';

declare var $: any;

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, AfterViewInit {

    friends: Friend[] = [];
    friendModal = undefined;

    constructor(private eventsService: EventsService,
                private userService: UserService,
                private rootNode: ElementRef) {
    }

    ngOnInit(): void {
        this.eventsService.toLoadFriends
            .subscribe(login => this.findTopFriendsOnReady(login));

        this.eventsService.userChangedEvent
            .subscribe(user => this.eventsService.toLoadFriends.emit(user.login));

    }

    findTopFriendsOnReady(login: string) {
        this.userService.findTopFriendsReady(login)
            .subscribe(ready => {
                if (ready.ready) {
                    this.findTopFriends(login);
                } else {
                    setTimeout(() => this.eventsService.toLoadFriends.emit(login), 3000);
                }
            });
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
