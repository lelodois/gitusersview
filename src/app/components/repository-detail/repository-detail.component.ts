import {Component, OnInit} from '@angular/core';
import {RepositoryService} from '../../provider/service/repository.service';
import {Repository} from '../../provider/model/repositorio.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../provider/service/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-repository-detail',
    templateUrl: './repository-detail.component.html',
    styleUrls: ['./repository-detail.component.scss']
})
export class RepositoryDetailComponent implements OnInit {

    repository: Repository = undefined;

    constructor(private router: Router,
                private http: HttpClient,
                private service: RepositoryService,
                private userService: UserService,
                private activatedRouter: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (this.activatedRouter.snapshot.params.id) {
            this.service.findById(this.activatedRouter.snapshot.params.id)
                .subscribe(repoResult => {
                    this.repository = repoResult;
                    this.findRepoByLogin(repoResult.owner.login);
                });
        }
    }

    findRepoByLogin(login: string) {
        this.userService.findByLogin(login)
            .subscribe(userResponse => this.repository.owner = userResponse);
    }

    backToUser() {
        this.router.navigate(['', this.repository.owner.login]);
    }
}