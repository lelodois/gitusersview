import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';

@Injectable()
export class UserService {

    URL = 'https://api.github.com/users/';

    constructor(private http: HttpClient) {
    }

    findByText(text: string): Observable<User> {
        return this.http.get<User>(this.URL.concat(text));
    }
}