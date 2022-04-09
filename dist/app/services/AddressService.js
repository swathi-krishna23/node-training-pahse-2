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
exports.AddressService = void 0;
const class_transformer_1 = require("class-transformer");
const Address_1 = require("../entities/Address");
class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    createAddress(addressInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const addressData = (0, class_transformer_1.plainToClass)(Address_1.address, {
                street: addressInput.street,
                state: addressInput.state,
                lane: addressInput.lane
            });
            const savedDetails = yield this.addressRepository.createAddress(addressData);
            return savedDetails;
        });
    }
}
exports.AddressService = AddressService;
//# sourceMappingURL=AddressService.js.map