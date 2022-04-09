import { address } from "../entities/Address";
import { AddressRepository } from "../repository/AddressRepository";
export declare class AddressService {
    private addressRepository;
    constructor(addressRepository: AddressRepository);
    createAddress(addressInput: any): Promise<address>;
}
