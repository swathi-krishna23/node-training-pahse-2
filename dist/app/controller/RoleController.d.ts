import { NextFunction, Response } from "express";
import { RoleService } from "../services/RoleService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
declare class RoleController extends AbstractController {
    private roleService;
    constructor(roleService: RoleService);
    protected initializeRoutes: () => void;
    createRole: (request: RequestWithUser, response: Response, next: NextFunction) => Promise<void>;
    private getAllRoles;
    private updateRole;
    private deleteRole;
}
export default RoleController;
