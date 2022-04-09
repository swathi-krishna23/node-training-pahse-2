
import { getConnection, Repository } from "typeorm";
import { project } from "../entities/Projects";

export class ProjectsRepository extends Repository<project> {
    Repository: any;
    public async createProject( projectDetails: project){
        const projectsConnection = getConnection().getRepository(project);
        return projectsConnection.save(projectDetails);
    }
}