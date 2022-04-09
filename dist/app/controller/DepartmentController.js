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
class DepartmentController extends controller_1.AbstractController {
    constructor(departmentService) {
        super(`${constants_1.default.apiPrefix}/departments`);
        this.departmentService = departmentService;
        this.initializeRoutes = () => {
            this.router.get(`${this.path}`, this.asyncRouteHandler(this.getAllDepartments));
            this.router.get(`${this.path}/employees`, this.asyncRouteHandler(this.getAllDepartmentsWithEmployees));
            this.router.get(`${this.path}/details`, this.asyncRouteHandler(this.getAllDeparmentWithDetails));
        };
        this.getAllDepartments = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.departmentService.getAllDepartments();
            response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.getAllDepartmentsWithEmployees = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.departmentService.getAllDepartmentsWithEmployees();
            response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.getAllDeparmentWithDetails = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.departmentService.getAllDepartmentsWithDetails();
            response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.initializeRoutes();
    }
}
exports.default = DepartmentController;
//# sourceMappingURL=DepartmentController.js.map