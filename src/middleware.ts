import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    req.headers.set('X-Lng', req.geo?.country || "unknown to Vercel Geolocationing");
    return NextResponse.next({
        headers: req.headers,
    });
}
