export type pet ={
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    freeDelivery: boolean;
    offer: number;
}

export type JWTPayload = {
    id: number,
    username: string,
    isAdmin: boolean
}