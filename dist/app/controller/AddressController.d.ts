import { NextFunction, Response } from "express";
import { AddressService } from "../services/AddressService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
declare class AddressController extends AbstractController {
    private addressService;
    constructor(addressService: AddressService);
    protected initializeRoutes: () => void;
    createAddress: (request: RequestWithUser, response: Response, next: NextFunction) => Promise<void>;
}
export default AddressController;
