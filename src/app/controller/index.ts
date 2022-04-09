/**
 * Wraps Controllers for easy import from other modules
 */
import { Repository } from "typeorm";
import { Employee } from "../entities/Employee";
import { AddressRepository } from "../repository/AddressRepository";
import { DepartmentRepository } from "../repository/DepartmentRepository";
import { EmployeeRepository } from "../repository/EmployeeRepository";
import { ProjectsRepository } from "../repository/ProjectsRepository";
import { RoleRepository } from "../repository/RoleRepository";
import { AddressService } from "../services/AddressService";
import { DepartmentService } from "../services/DepartmentService";
import { EmployeeService } from "../services/EmployeeService";
import { ProjectsService } from "../services/ProjectsService";
import { RoleService } from "../services/RoleService";
import AddressController from "./AddressController";
import DepartmentController from "./DepartmentController";
import EmployeeController from "./EmployeeController";
import HealthController from "./HealthController";
import ProjectsController from "./ProjectsController";
import RoleController from "./RoleController";

// const employee = new Employee();
const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);

const departmentRepository = new DepartmentRepository();
const departmentService = new DepartmentService(departmentRepository);

const projectsRepository = new ProjectsRepository();
const projectService = new ProjectsService(projectsRepository);

const roleRepository = new RoleRepository();
const roleService = new RoleService(roleRepository);

const addressRepository = new AddressRepository();
const addressService = new AddressService(addressRepository);

export default [
  new HealthController(),
  new EmployeeController(employeeService),
  new DepartmentController(departmentService),
  new ProjectsController(projectService),
  new RoleController(roleService),
  new AddressController(addressService)
];
