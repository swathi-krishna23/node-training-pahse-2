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
exports.DepartmentRepository = void 0;
const typeorm_1 = require("typeorm");
const Department_1 = require("../entities/Department");
class DepartmentRepository extends typeorm_1.Repository {
    getAllDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            const department = (0, typeorm_1.getConnection)().getRepository(Department_1.Department);
            return department.find();
        });
    }
    getAllDepartmentWithEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            const department = (0, typeorm_1.getConnection)().getRepository(Department_1.Department);
            return department.find({
                relations: ["employee"]
            });
        });
    }
    getAllDepartmentWithDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const department = (0, typeorm_1.getConnection)().getRepository(Department_1.Department);
            const details = yield department.createQueryBuilder("Department").select("DepartmentDetails").innerJoin("Department.departmentDetails", "DepartmentDetails").execute();
            return details;
        });
    }
}
exports.DepartmentRepository = DepartmentRepository;
//# sourceMappingURL=DepartmentRepository.js.map