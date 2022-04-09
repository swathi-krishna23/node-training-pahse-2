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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addedcolumn1649327017678 = void 0;
class addedcolumn1649327017678 {
    constructor() {
        this.name = 'addedcolumn1649327017678';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" ADD "role_id" uuid`);
            yield queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_1c105b756816efbdeae09a9ab65" UNIQUE ("role_id")`);
            yield queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_1c105b756816efbdeae09a9ab65" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_1c105b756816efbdeae09a9ab65"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_1c105b756816efbdeae09a9ab65"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "role_id"`);
        });
    }
}
exports.addedcolumn1649327017678 = addedcolumn1649327017678;
//# sourceMappingURL=1649327017678-addedcolumn.js.map