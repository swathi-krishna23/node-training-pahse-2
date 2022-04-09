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
const multer_1 = __importDefault(require("multer"));
const constants_1 = __importDefault(require("../constants"));
const CreateEmployee_1 = require("../dto/CreateEmployee");
const authorize_1 = __importDefault(require("../middleware/authorize"));
const validationMiddleware_1 = __importDefault(require("../middleware/validationMiddleware"));
const controller_1 = require("../util/rest/controller");
class EmployeeController extends controller_1.AbstractController {
    constructor(employeeService) {
        super(`${constants_1.default.apiPrefix}/employees`);
        this.employeeService = employeeService;
        this.upload = (0, multer_1.default)({ dest: "./public/uploads/" });
        this.initializeRoutes = () => {
            this.router.get(`${this.path}`, (0, authorize_1.default)(["admin", "Engineer"]), this.asyncRouteHandler(this.getAllEmployees));
            this.router.get(`${this.path}/:employeeId`, this.asyncRouteHandler(this.getEmployeeById));
            this.router.post(`${this.path}`, (0, validationMiddleware_1.default)(CreateEmployee_1.CreateEmployeeDto), this.createEmployee);
            this.router.put(`${this.path}/:employeeId`, this.asyncRouteHandler(this.updateEmployee));
            this.router.delete(`${this.path}/:employeeId`, this.asyncRouteHandler(this.deleteEmployee));
            this.router.post(`${this.path}/upload`, this.upload.single("file"), this.asyncRouteHandler(this.uploadImage));
            this.router.post(`${this.path}/login`, this.asyncRouteHandler(this.login));
        };
        this.getAllEmployees = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.employeeService.getAllEmployees();
            response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.getEmployeeById = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.employeeService.getEmployeeById(request.params.id);
            response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.createEmployee = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(request.body);
                const data = yield this.employeeService.createEmployee(request.body);
                response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
            }
            catch (err) {
                next(err);
            }
        });
        this.updateEmployee = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.employeeService.updateEmployee(request.params.employeeId, request.body);
            response.status(201).send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.deleteEmployee = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.employeeService.deleteEmployee(request.params.employeeId);
            response.status(201).send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.uploadImage = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${constants_1.default.basePath}/${request.file.path.slice(7)}`;
            response.send(this.fmt.formatResponse({ filePath }, Date.now() - request.startTime, "OK"));
        });
        this.login = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.employeeService.employeeLogin(request.body.username, request.body.password);
            response.status(200).send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.initializeRoutes();
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=EmployeeController.js.map