import { Model } from "sequelize-typescript";
export declare class Users extends Model {
    Id: number;
    fullName: string;
    gender: string;
    age: number;
    address: string;
    email: string;
    fitnessGoal: string;
}
