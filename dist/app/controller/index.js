"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddressRepository_1 = require("../repository/AddressRepository");
const DepartmentRepository_1 = require("../repository/DepartmentRepository");
const EmployeeRepository_1 = require("../repository/EmployeeRepository");
const ProjectsRepository_1 = require("../repository/ProjectsRepository");
const RoleRepository_1 = require("../repository/RoleRepository");
const AddressService_1 = require("../services/AddressService");
const DepartmentService_1 = require("../services/DepartmentService");
const EmployeeService_1 = require("../services/EmployeeService");
const ProjectsService_1 = require("../services/ProjectsService");
const RoleService_1 = require("../services/RoleService");
const AddressController_1 = __importDefault(require("./AddressController"));
const DepartmentController_1 = __importDefault(require("./DepartmentController"));
const EmployeeController_1 = __importDefault(require("./EmployeeController"));
const HealthController_1 = __importDefault(require("./HealthController"));
const ProjectsController_1 = __importDefault(require("./ProjectsController"));
const RoleController_1 = __importDefault(require("./RoleController"));
const employeeRepository = new EmployeeRepository_1.EmployeeRepository();
const employeeService = new EmployeeService_1.EmployeeService(employeeRepository);
const departmentRepository = new DepartmentRepository_1.DepartmentRepository();
const departmentService = new DepartmentService_1.DepartmentService(departmentRepository);
const projectsRepository = new ProjectsRepository_1.ProjectsRepository();
const projectService = new ProjectsService_1.ProjectsService(projectsRepository);
const roleRepository = new RoleRepository_1.RoleRepository();
const roleService = new RoleService_1.RoleService(roleRepository);
const addressRepository = new AddressRepository_1.AddressRepository();
const addressService = new AddressService_1.AddressService(addressRepository);
exports.default = [
    new HealthController_1.default(),
    new EmployeeController_1.default(employeeService),
    new DepartmentController_1.default(departmentService),
    new ProjectsController_1.default(projectService),
    new RoleController_1.default(roleService),
    new AddressController_1.default(addressService)
];
//# sourceMappingURL=index.js.map