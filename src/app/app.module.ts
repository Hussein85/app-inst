import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

// Services
import { UserService } from './user.service';

// Pipes
import { UserFilterPipe } from './user-filter.pipe';
import { FollowersFilterPipe } from './followers-filter.pipe';
import { LikesFilterPipe } from './likes-filter.pipe';
import { EngRateFilterPipe } from './engRate-filter.pipe';
import { EmailFilterPipe } from './email-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserFilterPipe,
    FollowersFilterPipe,
    LikesFilterPipe,
    EngRateFilterPipe,
    EmailFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


