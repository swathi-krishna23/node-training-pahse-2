import { Employee } from "../entities/Employee";
import { EmployeeRepository } from "../repository/EmployeeRepository";
export declare class EmployeeService {
    private employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getAllEmployees(): Promise<[Employee[], number]>;
    getEmployeeById(employeeId: string): Promise<Employee>;
    createEmployee(employeeDetails: any): Promise<Employee>;
    employeeLogin: (username: string, password: string) => Promise<{
        idToken: string;
        employeeDetails: Employee;
    }>;
    private generateAuthTokens;
    updateEmployee(employeeId: string, employeeDetails: any): Promise<import("typeorm").UpdateResult>;
    deleteEmployee(employeeId: string): Promise<import("typeorm").UpdateResult>;
}
