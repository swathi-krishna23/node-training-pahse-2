import { Repository } from "typeorm";
import { Employee } from "../entities/Employee";
export declare class EmployeeRepository extends Repository<Employee> {
    getAllEmployees(): Promise<[Employee[], number]>;
    getEmployeeById(id: string): Promise<Employee>;
    getEmployeeByUsername(username: string): Promise<Employee>;
    saveEmployeeDetails(employeeDetails: Employee): Promise<Employee>;
    updateEmployeeDetails(employeeId: string, employeeDetails: any): Promise<import("typeorm").UpdateResult>;
    updateEmployeeDetailsQueryBuilder(employeeId: string, employeeDetails: any): Promise<import("typeorm").UpdateResult>;
    softDeleteEmployeeById(id: string): Promise<import("typeorm").UpdateResult>;
    hardDeleteEmployeeById(id: string): Promise<import("typeorm").DeleteResult>;
    hardRemoveEmployee(employee: Employee): Promise<Employee>;
    softRemoveEmployee(employee: Employee): Promise<Employee>;
}
