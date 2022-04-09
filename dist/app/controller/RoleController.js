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
class RoleController extends controller_1.AbstractController {
    constructor(roleService) {
        super(`${constants_1.default.apiPrefix}/role`);
        this.roleService = roleService;
        this.initializeRoutes = () => {
            this.router.get(`${this.path}`, this.asyncRouteHandler(this.getAllRoles));
            this.router.put(`${this.path}/:roleId`, this.asyncRouteHandler(this.updateRole));
            this.router.post(`${this.path}`, this.asyncRouteHandler(this.createRole));
            this.router.delete(`${this.path}/:roleId`, this.asyncRouteHandler(this.deleteRole));
        };
        this.createRole = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(request.body);
                const data = yield this.roleService.createRole(request.body);
                response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
            }
            catch (err) {
                next(err);
            }
        });
        this.getAllRoles = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.roleService.getAllRoles();
            response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.updateRole = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.roleService.updateRole(request.params.roleId, request.body);
            response.status(201).send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.deleteRole = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.roleService.deleteRole(request.params.roleId);
            response.status(201).send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
        });
        this.initializeRoutes();
    }
}
exports.default = RoleController;
//# sourceMappingURL=RoleController.js.map