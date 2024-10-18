export interface Address {
    street: string;
    city: string;
    country: string;
}

export interface UsersInterface {
    id: string; 
    name: string;
    email: string;
    address: Address;
    phone: string;
}
