// Dto => Data Transfer Object
// in this file => I write a New Interfaces to Use it in GET and POST Operations

////////////////////////////////////////// Pets /////////////////////////////


//Create New Pets
export interface CreateNewPetsDto {
    name: string;
    image: string;
    description: string;
    price: number;
    freeDelivery: boolean;
    offer: number;
}


// Update Pet
// ? => it means that is Optional
export interface UpdateNewPetsDto {
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    freeDelivery?: boolean;
    offer?: number;
}


////////////////////////////////////////// Users /////////////////////////////

//Create New USer
export interface CreateNewUsers {
    username:string,
    email:string,
    password:string 
}