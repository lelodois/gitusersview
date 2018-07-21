import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';
import {URL_USER} from '../url-util.service';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    findByLogin(login: string): Observable<User> {
        return this.http.get<User>(URL_USER.concat(login));
    }
}