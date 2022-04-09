import { DepartmentRepository } from "../repository/DepartmentRepository";
export declare class DepartmentService {
    private departmentRepository;
    constructor(departmentRepository: DepartmentRepository);
    getAllDepartments(): Promise<import("../entities/Department").Department[]>;
    getAllDepartmentsWithEmployees(): Promise<import("../entities/Department").Department[]>;
    getAllDepartmentsWithDetails(): Promise<any>;
}
