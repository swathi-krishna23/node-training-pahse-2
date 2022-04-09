import { plainToClass } from "class-transformer";
import { project } from "../entities/Projects";
import { ProjectsRepository } from "../repository/ProjectsRepository";

export class ProjectsService {
    constructor(
        private projectsRepository: ProjectsRepository
    ) {}

    public async createProject(projectInput: any){
        const projectData = plainToClass( project, {
            name: projectInput.name,
            status: true,
            description: "KeyValue 123"
        });
        const savedDetails = await this.projectsRepository.createProject(projectData);
        return savedDetails;
    }
}