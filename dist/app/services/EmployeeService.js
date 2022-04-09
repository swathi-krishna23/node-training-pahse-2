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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const class_transformer_1 = require("class-transformer");
const Employee_1 = require("../entities/Employee");
const HttpException_1 = __importDefault(require("../exception/HttpException"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const IncorrectUsernameOrPasswordException_1 = __importDefault(require("../exception/IncorrectUsernameOrPasswordException"));
const UserNotAuthorizedException_1 = __importDefault(require("../exception/UserNotAuthorizedException"));
class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
        this.employeeLogin = (username, password) => __awaiter(this, void 0, void 0, function* () {
            const employeeDetails = yield this.employeeRepository.getEmployeeByUsername(username);
            if (!employeeDetails) {
                throw new UserNotAuthorizedException_1.default();
            }
            if (bcrypt_1.default.compare(password, employeeDetails.password)) {
                let payload = {
                    "custom:id": employeeDetails.id,
                    "custom:email": employeeDetails.username,
                    "role": employeeDetails.role.role
                };
                const token = this.generateAuthTokens(payload);
                return {
                    idToken: token,
                    employeeDetails,
                };
            }
            else {
                throw new IncorrectUsernameOrPasswordException_1.default();
            }
        });
        this.generateAuthTokens = (payload) => {
            return jsonwebtoken_1.default.sign(payload, process.env.JWT_TOKEN_SECRET, {
                expiresIn: process.env.ID_TOKEN_VALIDITY,
            });
        };
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.getAllEmployees();
        });
    }
    getEmployeeById(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.getEmployeeById(employeeId);
        });
    }
    createEmployee(employeeDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmployee = (0, class_transformer_1.plainToClass)(Employee_1.Employee, {
                    name: employeeDetails.name,
                    username: employeeDetails.username,
                    age: employeeDetails.age,
                    password: employeeDetails.password ? yield bcrypt_1.default.hash(employeeDetails.password, 10) : '',
                    departmentId: employeeDetails.departmentId,
                    roleId: employeeDetails.roleId,
                    addressId: employeeDetails.addressId,
                    isActive: true
                });
                console.log(newEmployee);
                const save = yield this.employeeRepository.saveEmployeeDetails(newEmployee);
                return save;
            }
            catch (err) {
                throw new HttpException_1.default(400, "Failed to create employee");
            }
        });
    }
    updateEmployee(employeeId, employeeDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEmployee = yield this.employeeRepository.updateEmployeeDetails(employeeId, employeeDetails);
            return updatedEmployee;
        });
    }
    deleteEmployee(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.softDeleteEmployeeById(employeeId);
        });
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map