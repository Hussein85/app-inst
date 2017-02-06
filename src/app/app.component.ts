import { Component, OnInit } from '@angular/core';

import { IUser } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    brand = 'Instagram Scrapper';
    pageTitle: string = 'Users';
    imageWidth: number = 50;
    imageMargin: number = 2;
    inputUserUrl: string = "";

    listFilter: string;
    likes = 0;
    followers = 0;
    engRate = 0;
    hasEmail = false;

    errorMessage: string;

    users: any;

    constructor(private userService: UserService) {

    }


    ngOnInit(): void {
      this.getUsers();
    }

    getUsers() {
      this.users =  this.userService.getUsers();
     
    }

    respTest: any;

    insert() {
      /*
      this.userService.scrapeUser(this.inputUserUrl).subscribe(
        resp => {
          if (resp.isUserValid) {
            alert("User added!")
            this.inputUserUrl = "";
          } else {
            alert("User already exists or didn't fulfill the minimum requirements!")
            this.inputUserUrl = "";
          }
          this.getUsers()
        },
        error => this.errorMessage = <any>error);

*/
    }

    shortenLargeNumber(num: any, digits: any) {
      var units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
        decimal;

      for (var i = units.length - 1; i >= 0; i--) {
        decimal = Math.pow(1000, i + 1);

        if (num <= -decimal || num >= decimal) {
          return +(num / decimal).toFixed(digits) + units[i];
        }
      }

      return num;
    }

}