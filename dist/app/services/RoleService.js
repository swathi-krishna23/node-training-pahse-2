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
exports.RoleService = void 0;
const class_transformer_1 = require("class-transformer");
const Roles_1 = require("../entities/Roles");
class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    createRole(roleInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleData = (0, class_transformer_1.plainToClass)(Roles_1.role, {
                role: roleInput.role
            });
            const savedDetails = yield this.roleRepository.createRole(roleData);
            return savedDetails;
        });
    }
    updateRole(roleId, roleDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateRole = yield this.roleRepository.updateRoleDetails(roleId, roleDetails);
            return updateRole;
        });
    }
    deleteRole(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleRepository.softDeleteRoleById(roleId);
        });
    }
    getAllRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleRepository.getAllRoles();
        });
    }
}
exports.RoleService = RoleService;
//# sourceMappingURL=RoleService.js.map