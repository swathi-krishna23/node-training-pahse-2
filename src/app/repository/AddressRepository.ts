import { getConnection, Repository } from "typeorm";
import { address } from "../entities/Address";


export class AddressRepository extends Repository<address>{
    Repository: any;
    public async createAddress( addressDetails: address){
        const addressConnection = getConnection().getRepository(address);
        return addressConnection.save(addressDetails);
    }
}