import { plainToClass } from "class-transformer";
import { address } from "../entities/Address";
import { AddressRepository } from "../repository/AddressRepository";


export class AddressService {
    constructor(
        private addressRepository: AddressRepository
    ){}
    public async createAddress(addressInput: any){
        const addressData = plainToClass( address, {
            street: addressInput.street,
            state: addressInput.state,
            lane:addressInput.lane
        });
        const savedDetails = await this.addressRepository.createAddress(addressData);
        return savedDetails;
    }
}