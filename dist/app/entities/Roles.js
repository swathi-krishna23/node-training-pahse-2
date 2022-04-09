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
exports.role = void 0;
const typeorm_1 = require("typeorm");
const AbstractEntity_1 = require("./AbstractEntity");
const Employee_1 = require("./Employee");
let role = class role extends AbstractEntity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], role.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Employee_1.Employee, (employee) => employee.role),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], role.prototype, "employee", void 0);
role = __decorate([
    (0, typeorm_1.Entity)("role")
], role);
exports.role = role;
//# sourceMappingURL=Roles.js.map