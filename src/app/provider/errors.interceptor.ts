import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .catch((err: HttpErrorResponse) => {
                if (err.status == 403) {
                    alert('O github bloqueou nosso acesso, pois excedemos os requests sem logar :(');
                } else {
                    alert(
                        'Ocorreu um erro desconhecido [status]-'
                            .concat(err.status.toString())
                            .concat('\n[Erro]-')
                            .concat(err.message.toLowerCase())
                    );
                }
                return Observable.empty<HttpEvent<any>>();
            });
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
};
