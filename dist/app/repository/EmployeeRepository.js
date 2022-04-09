"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepository = void 0;
const typeorm_1 = require("typeorm");
const Employee_1 = require("../entities/Employee");
class EmployeeRepository extends typeorm_1.Repository {
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.findAndCount();
        });
    }
    getEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.findOne(id, {
                relations: ['address', 'role']
            });
        });
    }
    getEmployeeByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            const employeeDetail = yield employeeRepo.findOne({
                where: { username },
                relations: ['role']
            });
            return employeeDetail;
        });
    }
    saveEmployeeDetails(employeeDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.save(employeeDetails);
        });
    }
    updateEmployeeDetails(employeeId, employeeDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            const updateEmployeeDetails = yield employeeRepo.update({ id: employeeId, deletedAt: null }, {
                name: employeeDetails.name ? employeeDetails.name : undefined,
                age: employeeDetails.age ? employeeDetails.age : undefined
            });
            return updateEmployeeDetails;
        });
    }
    updateEmployeeDetailsQueryBuilder(employeeId, employeeDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            const updateEmployeeDetails = yield employeeRepo.createQueryBuilder("Employee").update(Employee_1.Employee).set({
                name: employeeDetails.name ? employeeDetails.name : undefined,
                age: employeeDetails.age ? employeeDetails.age : undefined
            }).where({ id: employeeId, deletedAt: null }).returning("*").execute();
            return updateEmployeeDetails;
        });
    }
    softDeleteEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.softDelete({
                id
            });
        });
    }
    hardDeleteEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.delete({
                id
            });
        });
    }
    hardRemoveEmployee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.remove(employee);
        });
    }
    softRemoveEmployee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getConnection)().getRepository(Employee_1.Employee);
            return employeeRepo.softRemove(employee);
        });
    }
}
exports.EmployeeRepository = EmployeeRepository;
//# sourceMappingURL=EmployeeRepository.js.map