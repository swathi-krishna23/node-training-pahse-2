import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { AbstractEntity } from "./AbstractEntity"

@Entity ("address")
export class address extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string

    @Column()
    public street: string

    @Column()
    public state: string

    @Column()
    public lane: string

    
}