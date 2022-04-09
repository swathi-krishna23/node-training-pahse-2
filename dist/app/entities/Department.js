"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const AbstractEntity_1 = require("./AbstractEntity");
const DepartmentDetails_1 = require("./DepartmentDetails");
const Employee_1 = require("./Employee");
let Department = class Department extends AbstractEntity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", String)
], Department.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Employee_1.Employee, (employee) => employee.department),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Department.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => DepartmentDetails_1.DepartmentDetails, (departmentDetails) => departmentDetails),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", DepartmentDetails_1.DepartmentDetails)
], Department.prototype, "departmentDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "departmentDetailsId", void 0);
Department = __decorate([
    (0, typeorm_1.Entity)("department")
], Department);
exports.Department = Department;
//# sourceMappingURL=Department.js.map