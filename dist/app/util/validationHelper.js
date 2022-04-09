"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)({ default: "local", choices: ["production", "test", "local"] }),
        PORT: (0, envalid_1.port)(),
        POSTGRES_DB: (0, envalid_1.str)(),
        POSTGRES_HOST: (0, envalid_1.str)(),
        POSTGRES_PASSWORD: (0, envalid_1.str)(),
        POSTGRES_PORT: (0, envalid_1.port)(),
        POSTGRES_USER: (0, envalid_1.str)(),
    });
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=validationHelper.js.map