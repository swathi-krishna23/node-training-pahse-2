import { Repository } from "typeorm";
import { Department } from "../entities/Department";
export declare class DepartmentRepository extends Repository<Department> {
    getAllDepartments(): Promise<Department[]>;
    getAllDepartmentWithEmployees(): Promise<Department[]>;
    getAllDepartmentWithDetails(): Promise<any>;
}
