import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity ("project")
export class project extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string

    @Column()
    public name: string

    @Column()
    public status: boolean

    @Column({ nullable: true })
    public description: string

}