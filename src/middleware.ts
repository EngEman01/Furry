import { NextRequest, NextResponse } from 'next/server'


export function middleware(request: NextRequest) {
    const authToken = request.headers.get('authToken') as string;

    if (!authToken) {
        return NextResponse.json(
            { message: "no token provided, access denied , message from Middleware"  },
            { status: 401 }
        );
    }

}

export const config = {
    matcher: ['/api/users/:path*']
}