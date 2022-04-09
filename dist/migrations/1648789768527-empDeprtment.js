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
exports.empDeprtment1648789768527 = void 0;
class empDeprtment1648789768527 {
    constructor() {
        this.name = 'empDeprtment1648789768527';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "departmentDetails" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "department_room" character varying NOT NULL, "department_code" character varying, "website" character varying, CONSTRAINT "PK_1a19be3ec7fe32e887e665e5806" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "employee" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying, "age" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "department_id" integer NOT NULL, CONSTRAINT "UQ_389fe2fe09430efb8eabc4e1b6e" UNIQUE ("username"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "department" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "department_details_id" uuid, CONSTRAINT "REL_cd33326ed8c9f0d2ce5b39dd66" UNIQUE ("department_details_id"), CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_cd33326ed8c9f0d2ce5b39dd662" FOREIGN KEY ("department_details_id") REFERENCES "departmentDetails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`INSERT INTO public."departmentDetails"
        (created_at, updated_at, deleted_at, id, department_room, department_code, website)
        VALUES(now(), now(), NULL, 'e3a48e3f-febd-4a67-a9af-29e141afb59b', 'D101', 'PE', '')`);
            yield queryRunner.query(`INSERT INTO public."departmentDetails"
        (created_at, updated_at, deleted_at, id, department_room, department_code, website)
        VALUES(now(), now(), NULL, '47910efb-9d95-4815-ae59-256397b3652a', 'D102', 'HR', '')`);
            yield queryRunner.query(`INSERT INTO public."departmentDetails"
        (created_at, updated_at, deleted_at, id, department_room, department_code, website)
        VALUES(now(), now(), NULL, 'eddd8ffd-9162-4f3c-b56b-561b103ee29b', 'D103', 'FIN', '')`);
            yield queryRunner.query(`INSERT INTO public.department
        (created_at, updated_at, deleted_at, "name", department_details_id)
        VALUES(now(), now(), NULL, 'Product Engineering', 'e3a48e3f-febd-4a67-a9af-29e141afb59b')`);
            yield queryRunner.query(`INSERT INTO public.department
        (created_at, updated_at, deleted_at, "name", department_details_id)
        VALUES(now(), now(), NULL, 'Human Resource', '47910efb-9d95-4815-ae59-256397b3652a')`);
            yield queryRunner.query(`INSERT INTO public.department
        (created_at, updated_at, deleted_at, "name", department_details_id)
        VALUES(now(), now(), NULL, 'Finance', 'eddd8ffd-9162-4f3c-b56b-561b103ee29b')`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_cd33326ed8c9f0d2ce5b39dd662"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
            yield queryRunner.query(`DROP TABLE "department"`);
            yield queryRunner.query(`DROP TABLE "employee"`);
            yield queryRunner.query(`DROP TABLE "departmentDetails"`);
        });
    }
}
exports.empDeprtment1648789768527 = empDeprtment1648789768527;
//# sourceMappingURL=1648789768527-empDeprtment.js.map