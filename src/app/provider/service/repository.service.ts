import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {URL_REPO, URL_USER} from '../url-util.service';
import {Repository} from '../model/repositorio.model';

@Injectable()
export class RepositoryService {

    constructor(private http: HttpClient) {
    }

    findByLogin(login: string, page: number, itemsPerPage: number): Observable<Repository[]> {
        return this.http.get<Repository[]>(
            URL_USER.concat(login)
                .concat('/repos?page=')
                .concat(page.toString())
                .concat('&per_page=')
                .concat(itemsPerPage.toString())
        );
    }

    findById(repoId: number): Observable<Repository> {
        return this.http.get<Repository>(
            URL_REPO.concat(repoId.toString())
        );
    }
}