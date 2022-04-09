import { AbstractEntity } from "./AbstractEntity";
import { DepartmentDetails } from "./DepartmentDetails";
import { Employee } from "./Employee";
export declare class Department extends AbstractEntity {
    id: string;
    name: string;
    employee: Employee[];
    departmentDetails: DepartmentDetails;
    departmentDetailsId: string;
}
