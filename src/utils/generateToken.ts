import jwt from 'jsonwebtoken'
import { JWTPayload } from './types';
import { serialize } from 'cookie';


// Generate JWT Token
// This function generates a JWT token using the provided payload and secret key.
export function generateJWT(jwtPayload: JWTPayload): string {

    const JWTSecret = process.env.JWT_SECRET as string
    const token = jwt.sign(jwtPayload, JWTSecret, {
        expiresIn: '30d'
    });
    return token;

}

// Set Cookies with JWT
export function generateCookies(jwtPayload: JWTPayload): string {
    const token = generateJWT(jwtPayload);

    const cookie = serialize("jwtToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 day
    })

    return cookie;

}