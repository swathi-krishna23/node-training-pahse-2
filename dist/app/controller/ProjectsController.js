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
const CreateProjects_1 = require("../dto/CreateProjects");
const validationMiddleware_1 = __importDefault(require("../middleware/validationMiddleware"));
const controller_1 = require("../util/rest/controller");
class ProjectsController extends controller_1.AbstractController {
    constructor(projectService) {
        super(`${constants_1.default.apiPrefix}/projects`);
        this.projectService = projectService;
        this.initializeRoutes = () => {
            this.router.post(`${this.path}`, (0, validationMiddleware_1.default)(CreateProjects_1.CreateProjectDto, constants_1.default.body), this.asyncRouteHandler(this.createProject));
        };
        this.createProject = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.projectService.createProject(request.body);
                response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK"));
            }
            catch (err) {
                next(err);
            }
        });
        this.initializeRoutes();
    }
}
exports.default = ProjectsController;
//# sourceMappingURL=ProjectsController.js.map