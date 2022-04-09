"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const HttpException_1 = __importDefault(require("../exception/HttpException"));
const errorCode_1 = require("../util/errorCode");
function validationMiddleware(type, parameter, skipMissingProperties = false) {
    return (req, res, next) => {
        const requestBody = (0, class_transformer_1.plainToClass)(type, req.body);
        (0, class_validator_1.validate)(requestBody, { skipMissingProperties, forbidUnknownValues: true, whitelist: true })
            .then((errors) => {
            if (errors.length > 0) {
                const errorDetail = errorCode_1.ErrorCodes.VALIDATION_ERROR;
                next(new HttpException_1.default(400, errorDetail.MESSAGE, errorDetail.CODE, errors));
            }
            else {
                req.body = requestBody;
                next();
            }
        });
    };
}
exports.default = validationMiddleware;
//# sourceMappingURL=validationMiddleware.js.map