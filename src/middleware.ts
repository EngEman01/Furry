import { NextRequest , NextResponse } from 'next/server'


export function middleware(request : NextRequest){
    console.log('Middleware is called');
    
}

export const config ={
    matcher: ['/']
}