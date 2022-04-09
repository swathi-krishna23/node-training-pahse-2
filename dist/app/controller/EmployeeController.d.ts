import { EmployeeService } from "../services/EmployeeService";
import { AbstractController } from "../util/rest/controller";
declare class EmployeeController extends AbstractController {
    private employeeService;
    private upload;
    constructor(employeeService: EmployeeService);
    protected initializeRoutes: () => void;
    private getAllEmployees;
    private getEmployeeById;
    private createEmployee;
    private updateEmployee;
    private deleteEmployee;
    private uploadImage;
    private login;
}
export default EmployeeController;
