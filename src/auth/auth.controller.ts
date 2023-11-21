import {Body, Controller,Get,Post,HttpCode,HttpStatus, Request,
    UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {

    constructor (private authService:AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto:Record<string,any>){
        return this.authService.signIn(signInDto.username, signInDto.password);

    }

@UseGuards(AuthGuard)
@Get('Profile')
getProfile(@Request() req){
    return req.user;
}




}