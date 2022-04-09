import { Repository } from "typeorm";
import { address } from "../entities/Address";
export declare class AddressRepository extends Repository<address> {
    Repository: any;
    createAddress(addressDetails: address): Promise<address>;
}
