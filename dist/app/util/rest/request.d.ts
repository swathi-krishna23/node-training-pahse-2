import { Request } from "express";
export default interface RequestWithUser extends Request {
    userId: string;
    role: string;
    startTime?: number;
    userAgent?: {
        [key: string]: any;
    };
}
