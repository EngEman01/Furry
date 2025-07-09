import { JWTPayload } from "@/utils/types";
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

// virefy if token exist in cookies or not
export function verifyToken(request: NextRequest): JWTPayload | null {

    try {

        const jwtToken = request.cookies.get('jwtToken');
        const token = jwtToken?.value as string;
        if (!token) return null;

        const JWTSecret = process.env.JWT_SECRET as string;

        const userPayload = jwt.verify(token, JWTSecret) as JWTPayload;

        return userPayload;

    }
    catch (error) {
        return null;
    }
}

// virefy token for page
export function verifyTokenForPage(token : string): JWTPayload | null {

    try {

        const JWTSecret = process.env.JWT_SECRET as string;

        const userPayload = jwt.verify(token, JWTSecret) as JWTPayload;
        if(!userPayload) return null;

        return userPayload;

    }
    catch (error) {
        return null;
    }
}