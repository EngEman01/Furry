import { z } from 'zod'  
   
   
export const createPetsSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }).min(2).max(200),
    type: z.string().min(2).max(100),
    image: z.string().min(2).max(200),
    description: z.string().min(2),
    price: z.number().min(1),
    freeDelivery: z.boolean(),
    offer: z.number().min(0)
})



export const createUserSchema = z.object({
    username: z.string().min(2).max(100),
    phone: z.string().min(11).max(100),
    email: z.string().min(3).max(200).email(),
    password: z.string().min(6)
})


// export const updateUserSchema = z.object({
//     username: z.string().min(2).max(100, { message: "Username must be between 2 and 100 characters" }),
//     phone: z.string().min(11, { message: "Phone number must be at least 11 characters" }).max(15, { message: "Phone number must not exceed 15 characters" }),
//     email: z.string().email({ message: "Invalid email address" }).min(3).max(200),
//     password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
//     isAdmin: z.boolean( { message: "Password must be at least 6 characters long" }).optional()
// })