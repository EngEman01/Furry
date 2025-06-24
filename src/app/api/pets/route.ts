import { stat } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { Pets } from '@/utils/data';

export function GET(request: NextRequest) {
    return NextResponse.json(Pets , {status: 200});
}