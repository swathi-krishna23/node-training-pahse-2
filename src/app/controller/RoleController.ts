import { NextFunction,Response } from "express";
import APP_CONSTANTS from "../constants";
import { RoleService } from "../services/RoleService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";


class RoleController extends AbstractController {
    constructor(
        private roleService: RoleService
    ) {
      super(`${APP_CONSTANTS.apiPrefix}/role`);
      this.initializeRoutes();
    }

    protected initializeRoutes = (): void => {
        this.router.get(
            `${this.path}`,
            this.asyncRouteHandler(this.getAllRoles)
        );

    this.router.put(
        `${this.path}/:roleId`,
      this.asyncRouteHandler(this.updateRole)
    );
    this.router.post(
        `${this.path}`,
      this.asyncRouteHandler(this.createRole)
    );
    this.router.delete(
        `${this.path}/:roleId`,
        this.asyncRouteHandler(this.deleteRole)
    );
    }
    public  createRole= async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
    ) => {
      try{ 
          console.log(request.body)
          const data = await this.roleService.createRole(request.body);
        response.send(
            this.fmt.formatResponse(data,Date.now() - request.startTime, "OK"));
        }
      catch(err){
          //throw new HttpException(400, "Failed to create project");
          next(err);
      }
        
  }
  private getAllRoles = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const data = await this.roleService.getAllRoles();
    response.send(
      this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
    );
  }

  private updateRole = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const data = await this.roleService.updateRole(request.params.roleId, request.body);
      response.status(201).send(
        this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
  }

  private deleteRole = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const data = await this.roleService.deleteRole(request.params.roleId);
      response.status(201).send(
          this.fmt.formatResponse(data,Date.now() - request.startTime, "OK")
      );
  }

}

export default RoleController