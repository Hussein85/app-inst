import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IUser } from './user';

@Injectable()
export class UserService {
    
    private usersUrl = 'api/users.json';
 
    constructor(private http: Http) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get(this.usersUrl)
            .map((response: Response) => <IUser[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUser(id: string): Observable<IUser> {
        return this.getUsers()
            .map((users: IUser[]) => users.find(p => p.id === id));
    }


     scrapeUser(userUrl: string) {
        var dataTest = {"userUrl" : userUrl} 
        return this.http.post('http://localhost:8081/scrape', dataTest)
            .map((response: Response) =>  response.json())
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
