import { AbstractEntity } from "./AbstractEntity";
import { address } from "./Address";
import { Department } from "./Department";
import { role } from "./Roles";
export declare class Employee extends AbstractEntity {
    id: string;
    name: string;
    username: string;
    password: string;
    age: number;
    isActive: boolean;
    department: Department;
    departmentId: string;
    role: role;
    roleId: string;
    address: address;
    addressId: string;
}
