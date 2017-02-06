import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IUser } from './user';


var users = [
    {
        "id": "173715345",
        "userName": "ashanty_ash",
        "fullName": "Ashanty",
        "followers": 9207410,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/14099359_170466023390245_1798473741_a.jpg",
        "engRates": 0,
        "postsLast30Days": 12,
        "avgLikes": 45314
    },
    {
        "id": "1558824459",
        "userName": "brooklynbeckham",
        "fullName": "bb",
        "followers": 9067216,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/14240905_689486987871789_700862738_a.jpg",
        "engRates": 4,
        "postsLast30Days": 12,
        "avgLikes": 353887
    },
    {
        "id": "253160049",
        "userName": "handemiyy",
        "fullName": "Hande Erçel",
        "followers": 4027436,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/11189427_446491748846401_1743130198_a.jpg",
        "engRates": 10,
        "postsLast30Days": 11,
        "avgLikes": 406835
    },
    {
        "id": "2094200507",
        "userName": "virat.kohli",
        "fullName": "Virat Kohli",
        "followers": 10083660,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/14488214_1670903139798796_5909655706855800832_a.jpg",
        "engRates": 4,
        "postsLast30Days": 12,
        "avgLikes": 395760
    },
    {
        "id": "39525543",
        "userName": "valliludovica",
        "fullName": "Ludovica Valli",
        "followers": 1261834,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/15101665_1020814184707833_719407662030127104_a.jpg",
        "engRates": 4,
        "postsLast30Days": 12,
        "avgLikes": 45846
    },
    {
        "id": "16574864",
        "userName": "ryandestiny",
        "fullName": "RD",
        "followers": 173113,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/13694545_1142713029120876_1313505023_a.jpg",
        "engRates": 8,
        "postsLast30Days": 12,
        "avgLikes": 13743
    },
    {
        "id": "17501629",
        "userName": "jaydepierce",
        "fullName": "Jayde Pierce",
        "followers": 855509,
        "imageUrl": "https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/15275597_1821757331402534_7861319778512666624_a.jpg",
        "engRates": 6,
        "postsLast30Days": 12,
        "avgLikes": 55249
    }
]














@Injectable()
export class UserService {
    
    //private usersUrl = 'api/users.json';
 
    constructor(private http: Http) { }

    getUsers(){
        return users;
    }

/*
    getUser(id: string): Observable<IUser> {
        return this.getUsers()
            .map((users: IUser[]) => users.find(p => p.id === id));
    }
*/

     scrapeUser(userUrl: string) {
         /*
        var dataTest = {"userUrl" : userUrl} 
        return this.http.post('http://localhost:8081/scrape', dataTest)
            .map((response: Response) =>  response.json())
            .catch(this.handleError);
            */
    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
