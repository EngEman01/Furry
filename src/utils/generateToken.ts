import jwt from 'jsonwebtoken'
import { JWTPayload } from './types';

export function generateJWT(jwtPayload: JWTPayload): string {

    const JWTSecret = process.env.JWT_SECRET as string
    const token = jwt.sign(jwtPayload, JWTSecret, {
        expiresIn: '30d'
    });
    return token;

}