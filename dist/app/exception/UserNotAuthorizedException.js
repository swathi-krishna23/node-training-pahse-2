"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../util/errorCode");
const HttpException_1 = __importDefault(require("./HttpException"));
class UserNotAuthorizedException extends HttpException_1.default {
    constructor() {
        const errorDetail = errorCode_1.ErrorCodes.UNAUTHORIZED;
        super(401, errorDetail.MESSAGE, errorDetail.CODE);
    }
}
exports.default = UserNotAuthorizedException;
//# sourceMappingURL=UserNotAuthorizedException.js.map