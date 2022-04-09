import { project } from "../entities/Projects";
import { ProjectsRepository } from "../repository/ProjectsRepository";
export declare class ProjectsService {
    private projectsRepository;
    constructor(projectsRepository: ProjectsRepository);
    createProject(projectInput: any): Promise<project>;
}
