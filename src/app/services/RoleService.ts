import { plainToClass } from "class-transformer";
import { role } from "../entities/Roles";
import { RoleRepository } from "../repository/RoleRepository";


export class RoleService {
    constructor(
        private roleRepository: RoleRepository
    ){}
    
    public async createRole(roleInput: any){
        const roleData = plainToClass( role, {
            role: roleInput.role
        });
        const savedDetails = await this.roleRepository.createRole(roleData);
        return savedDetails;
    }

    public async updateRole(roleId: string, roleDetails:any){
        const updateRole = await this.roleRepository.updateRoleDetails(roleId,roleDetails);
        return updateRole;
    }

    public async deleteRole(roleId: string){
        return this.roleRepository.softDeleteRoleById(roleId);
    }

    public async getAllRoles(){
        return this.roleRepository.getAllRoles();
    }

}