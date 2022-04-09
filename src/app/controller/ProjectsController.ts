import { validate } from "class-validator";
import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import { CreateProjectDto } from "../dto/CreateProjects";
import HttpException from "../exception/HttpException";
import validationMiddleware from "../middleware/validationMiddleware";
import { ProjectsService } from "../services/ProjectsService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";


class ProjectsController extends AbstractController {

    constructor(
      private projectService: ProjectsService
    ) {
      super(`${APP_CONSTANTS.apiPrefix}/projects`);
      this.initializeRoutes();
    }

    protected initializeRoutes = (): void => {
        this.router.post(
            `${this.path}`,
            validationMiddleware(CreateProjectDto, APP_CONSTANTS.body),
            this.asyncRouteHandler(this.createProject)
        );
    }

    public  createProject= async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          try{ 
              const data = await this.projectService.createProject(request.body);
            response.send(
                this.fmt.formatResponse(data,Date.now() - request.startTime, "OK"));
            }
          catch(err){
              //throw new HttpException(400, "Failed to create project");
              next(err);
          }
          
        
      }

  }

export default ProjectsController;