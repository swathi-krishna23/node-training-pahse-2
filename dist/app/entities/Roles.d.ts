import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";
export declare class role extends AbstractEntity {
    id: string;
    role: string;
    employee: Employee[];
}
