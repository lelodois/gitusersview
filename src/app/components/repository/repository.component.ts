import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {Repository} from '../../provider/model/repositorio.model';
import {RepositoryService} from '../../provider/service/repository.service';
import {User} from '../../provider/model/user.model';

@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

    repos: Repository[] = [];
    user: User = undefined;

    constructor(private eventsService: EventsService,
                private repoService: RepositoryService) {
    }

    ngOnInit(): void {
        this.eventsService.userChangedEvent
            .subscribe(userChanged => {
                this.user = userChanged;

                this.repoService.findByLogin(this.user.login)
                    .subscribe(repos => {
                        this.repos = repos;
                    });

            });
    }

}
