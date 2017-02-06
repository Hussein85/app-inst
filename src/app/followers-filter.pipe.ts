import {  PipeTransform, Pipe } from '@angular/core';
import { IUser } from '../interfaces/user';

@Pipe({
    name: 'followersFilter'
})
export class FollowersFilterPipe implements PipeTransform {

    transform(value: IUser[], filterBy: number): IUser[] {
        filterBy = filterBy ? filterBy : null;
        return filterBy ? value.filter((user: IUser) =>
            user.followers > filterBy) : value;

            
    }

}
