import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { UsersInterface } from './users.interface';

@Injectable()
export class UsersService {
    generateUsers(count: number): UsersInterface[] { 
        const users: UsersInterface[] = []; 

        for (let i = 0; i < count; i++) {
            users.push({
                id: uuidv4(), 
                name: faker.person.fullName(), 
                email: faker.internet.email(), 
                address: {
                    street: faker.location.streetAddress(),  
                    city: faker.location.city(),  
                    country: faker.location.country(),  
                },
                phone: faker.phone.number(), 
            });
        }

        return users; 
    }
}