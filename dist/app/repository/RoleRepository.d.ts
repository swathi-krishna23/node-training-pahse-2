import { Repository } from "typeorm";
import { role } from "../entities/Roles";
export declare class RoleRepository extends Repository<role> {
    Repository: any;
    createRole(roleDetails: role): Promise<role>;
    updateRoleDetails(roleId: string, roleDetails: any): Promise<import("typeorm").UpdateResult>;
    softDeleteRoleById(id: string): Promise<import("typeorm").UpdateResult>;
    getAllRoles(): Promise<[role[], number]>;
}
