import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class Users extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    Id: number;

    @Column
    fullName: string;

    @Column
    gender: string;

    @Column
    age: number;

    @Column
    address: string;

    @Column
    email: string;

    @Column
    fitnessGoal: string;

}
