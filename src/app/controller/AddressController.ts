import { NextFunction,Response } from "express";
import APP_CONSTANTS from "../constants";
import { AddressService } from "../services/AddressService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class AddressController extends AbstractController {

    constructor(
        private addressService: AddressService
    ) {
        super(`${APP_CONSTANTS.apiPrefix}/address`);
        this.initializeRoutes();
    }

    protected initializeRoutes = (): void => {
        this.router.post(
            `${this.path}`,
            this.createAddress
        );
    }

    public  createAddress= async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
    ) => {
      try{ 
          console.log(request.body)
          const data = await this.addressService.createAddress(request.body);
        response.send(
            this.fmt.formatResponse(data,Date.now() - request.startTime, "OK"));
        }
      catch(err){
          //throw new HttpException(400, "Failed to create project");
          next(err);
      }
    }
}

export default AddressController