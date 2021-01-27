
  export class DataEntity {
    first_name: string;
    name: string;
    id: number;
    addresses?: (AddressesEntity | null)[] | null;
    phone_numbers?: (PhoneNumbersEntity | null)[] | null;
    constructor(response: any){
        this.first_name = response.first_name;
        this.name = response.name;
        this.id = response.id;
    }
  }
  export class AddressesEntity {
    id: number;
    street: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
    constructor(response: any){
        this.id = response.id;
        this.street = response.street;
        this.city = response.city;
        this.province = response.province;
        this.postal_code = response.postal_code;
        this.country = response.country;
    }
  }
  export class PhoneNumbersEntity {
    id: number;
    number: string;
    constructor(response: any){
        this.id = response.data.data.id;
        this.number = response.number;
    }
  }
  