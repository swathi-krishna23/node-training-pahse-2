import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";


@Entity ("role")
export class role extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string

    @Column({ nullable: false })
    public role: string

    @OneToMany((type) =>Employee , (employee) => employee.role)
    @JoinColumn()
    public employee:Employee[];
}

