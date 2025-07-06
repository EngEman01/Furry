// Dto => Data Transfer Object

// in this file => I write a New Interfaces to Use it in GET and POST Operations

//////////////////////////////////////////////////// Pets ///////////////////////////////////////////////////////////


//Create New Pets
export interface CreateNewPetsDto {
    name: string;
    type: string;
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
    type?: string;
    image?: string;
    description?: string;
    price?: number;
    freeDelivery?: boolean;
    offer?: number;
}


//////////////////////////////////////////////////////////// Users //////////////////////////////////////////////////

//Create New USer
export interface CreateNewUsers {
    username:string,
    phone:string,
    email:string,
    password:string 
}


//Update USer
export interface UpdateUsers {
    username?:string,
    phone?:string,
    email?:string,
    password?:string
}

//Login to USer
export interface LoginUsers {
    email:string,
    password:string
}


//////////////////////////////////////////////////////////// Blogs //////////////////////////////////////////////////

//Create New Blog
export interface CreateNewBlogDto {
    title: string,
    description: string,
    petId: number
}


//Update Blog
export interface UpdateBlogDto {
    title?: string,
    description?: string,
    petId?: number
}