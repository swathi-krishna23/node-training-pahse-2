import { DepartmentService } from "../services/DepartmentService";
import { AbstractController } from "../util/rest/controller";
declare class DepartmentController extends AbstractController {
    private departmentService;
    constructor(departmentService: DepartmentService);
    protected initializeRoutes: () => void;
    private getAllDepartments;
    private getAllDepartmentsWithEmployees;
    private getAllDeparmentWithDetails;
}
export default DepartmentController;
