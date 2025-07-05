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

export const loginUserSchema = z.object({
    email: z.string().min(3).max(200).email(),
    password: z.string().min(6)
})
