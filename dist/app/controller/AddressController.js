"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const controller_1 = require("../util/rest/controller");
class AddressController extends controller_1.AbstractController {
    constructor(addressService) {
        super(`${constants_1.default.apiPrefix}/address`);
        this.addressService = addressService;
        this.initializeRoutes = () => {
            this.router.post(`${this.path}`, this.createAddress);
        };
        this.createAddress = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(request.body);
                const data = yield this.addressService.createAddress(request.body);
                response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
            }
            catch (err) {
                next(err);
            }
        });
        this.initializeRoutes();
    }
}
exports.default = AddressController;
//# sourceMappingURL=AddressController.js.map