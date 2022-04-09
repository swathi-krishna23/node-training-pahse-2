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
exports.RoleRepository = void 0;
const typeorm_1 = require("typeorm");
const Roles_1 = require("../entities/Roles");
class RoleRepository extends typeorm_1.Repository {
    createRole(roleDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleConnection = (0, typeorm_1.getConnection)().getRepository(Roles_1.role);
            return roleConnection.save(roleDetails);
        });
    }
    updateRoleDetails(roleId, roleDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleRepo = (0, typeorm_1.getConnection)().getRepository(Roles_1.role);
            const updateRoleDetails = yield roleRepo.update({ id: roleId, deletedAt: null }, {
                role: roleDetails.role ? roleDetails.role : undefined
            });
            return updateRoleDetails;
        });
    }
    softDeleteRoleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleRepo = (0, typeorm_1.getConnection)().getRepository(Roles_1.role);
            return roleRepo.softDelete({
                id
            });
        });
    }
    getAllRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const roleRepo = (0, typeorm_1.getConnection)().getRepository(Roles_1.role);
            return roleRepo.findAndCount();
        });
    }
}
exports.RoleRepository = RoleRepository;
//# sourceMappingURL=RoleRepository.js.map