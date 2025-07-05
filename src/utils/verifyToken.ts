import { JWTPayload } from "@/utils/types";
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";


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