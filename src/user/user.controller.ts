import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userServices: UserService) {}

    @Post()
    async createUser(@Body() createUser: CreateUserDto){
        return this.userServices.createUser(createUser);
    }
}