import { Repository } from "typeorm";
import { project } from "../entities/Projects";
export declare class ProjectsRepository extends Repository<project> {
    Repository: any;
    createProject(projectDetails: project): Promise<project>;
}
