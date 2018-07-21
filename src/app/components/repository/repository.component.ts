import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {Repository} from '../../provider/model/repositorio.model';
import {RepositoryService} from '../../provider/service/repository.service';
import {User} from '../../provider/model/user.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

    repos: Repository[] = [];
    user: User = undefined;
    page = 1;
    itemsPerPage = 30;

    constructor(private eventsService: EventsService,
                private repoService: RepositoryService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.eventsService.userChangedEvent
            .subscribe(userChanged => {
                this.user = userChanged;
                this.page = 1;
                this.findRepos();

            });
    }

    pageChanged(event) {
        this.page = event;
        this.findRepos();
    }

    showRepositoryDetail(repository: Repository) {
        this.router.navigate(['repository', repository.id]);
    }

    private findRepos() {
        this.repoService.findByLogin(this.user.login, this.page, this.itemsPerPage)
            .subscribe(repos => {
                this.repos = repos;
            });
    }

}
