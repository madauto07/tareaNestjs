import { Injectable } from '@nestjs/common';
import { promises } from 'dns';

export type  User = any;
@Injectable()
export class UsersService {

    private readonly users=[{
        userId:1,
        username:'john',
        password: '1233455'
    },
{
        userId:2,
        username:'maria',
        password: '2323234'
}];

async findOne(username:string):Promise<User | undefined>{
return this.users.find(user => user.username==username);
};



}
