import { NextFunction, Response } from "express";
import { ProjectsService } from "../services/ProjectsService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
declare class ProjectsController extends AbstractController {
    private projectService;
    constructor(projectService: ProjectsService);
    protected initializeRoutes: () => void;
    createProject: (request: RequestWithUser, response: Response, next: NextFunction) => Promise<void>;
}
export default ProjectsController;
