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
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const AbstractEntity_1 = require("./AbstractEntity");
const Address_1 = require("./Address");
const Department_1 = require("./Department");
const Roles_1 = require("./Roles");
let Employee = class Employee extends AbstractEntity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Employee.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Employee.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Employee.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Department_1.Department, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Department_1.Department)
], Employee.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Roles_1.role, (role) => role.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Roles_1.role)
], Employee.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Address_1.address, (address) => address),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Address_1.address)
], Employee.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "addressId", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)("employee")
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map