import { getConnection, Repository } from "typeorm";
import { role } from "../entities/Roles";

export class RoleRepository extends Repository<role> {
    Repository: any;
    public async createRole( roleDetails: role){
        const roleConnection = getConnection().getRepository(role);
        return roleConnection.save(roleDetails);
    }

    public async updateRoleDetails(roleId:string, roleDetails:any){
        const roleRepo = getConnection().getRepository(role);
        const updateRoleDetails = await roleRepo.update({id:roleId,deletedAt:null},{
            role: roleDetails.role ? roleDetails.role : undefined
        });

        return updateRoleDetails;
    }

    public async softDeleteRoleById(id:string){
       const roleRepo= getConnection().getRepository(role);
       return roleRepo.softDelete({
        id
    });
    }

    public async getAllRoles(){
        const roleRepo = getConnection().getRepository(role);
        return roleRepo.findAndCount();
    }
    
}