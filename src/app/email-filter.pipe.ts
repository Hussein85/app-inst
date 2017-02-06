import {  PipeTransform, Pipe } from '@angular/core';
import { IUser } from './user';

@Pipe({
    name: 'emailFilter'
})
export class EmailFilterPipe implements PipeTransform {

    transform(value: IUser[], filterBy: boolean): IUser[] {
        filterBy = filterBy ? filterBy : null;
        
        if (!filterBy){
            return value;
        }

        return filterBy ? value.filter((user: IUser) =>
            user.email !== '') : value;

            
    }

}
