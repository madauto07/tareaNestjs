import { Injectable,UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { privateDecrypt } from 'crypto';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwService : JwtService
        )
{}
async signIn(username, pass){
    const user = await this.usersService.findOne(username);
    if(user?.password!== pass){
        throw new UnauthorizedException();
    }
   // const {password,...result}=user;
   const payload = {sb:user.userId, username:user.username}
return { 
    access_token : await this.jwService.signAsync(payload),
};

}

}
