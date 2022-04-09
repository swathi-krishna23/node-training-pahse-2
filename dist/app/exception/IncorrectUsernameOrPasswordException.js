"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../util/errorCode");
const HttpException_1 = __importDefault(require("./HttpException"));
class IncorrectUsernameOrPasswordException extends HttpException_1.default {
    constructor() {
        const errorDetail = errorCode_1.ErrorCodes.INCORRECT_USERNAME_OR_PASWWORD;
        super(401, errorDetail.MESSAGE, errorDetail.CODE);
    }
}
exports.default = IncorrectUsernameOrPasswordException;
//# sourceMappingURL=IncorrectUsernameOrPasswordException.js.map