import { role } from "../entities/Roles";
import { RoleRepository } from "../repository/RoleRepository";
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: RoleRepository);
    createRole(roleInput: any): Promise<role>;
    updateRole(roleId: string, roleDetails: any): Promise<import("typeorm").UpdateResult>;
    deleteRole(roleId: string): Promise<import("typeorm").UpdateResult>;
    getAllRoles(): Promise<[role[], number]>;
}
