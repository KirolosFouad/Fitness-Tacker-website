import { IsEmail, IsNumber, IsString } from "class-validator";
export class CreateUserDto {

    @IsString()
    fullName : string;

    @IsString()
    gender : string;

    @IsNumber()
    age : number;

    @IsString()
    address : string;

    @IsEmail()
    email : string;

    @IsString()
    fitnessGoal : string;
}
