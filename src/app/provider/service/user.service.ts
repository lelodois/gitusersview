import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';
import {URL_FRIENDS, URL_FRIENDS_PUT, URL_GIT_AUTH, URL_USER} from '../url-util.service';
import {Friend} from '../model/friend.model';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    putFriends(login: string) {
        this.http.put<String>(URL_FRIENDS_PUT, {login: login}, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).subscribe(response => console.log(response));
    }

    findByLogin(login: string): Observable<User> {
        return this.http.get<User>(
            URL_USER.concat(login)
                .concat('?')
                .concat(URL_GIT_AUTH)
        );
    }

    findTopFriends(login: string): Observable<Friend[]> {
        return this.http.get<Friend[]>(
            URL_FRIENDS.concat(login)
        );
    }
}