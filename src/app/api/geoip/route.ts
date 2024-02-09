import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import FastGeoip from "doc999tor-fast-geoip";

export async function GET(req: NextRequest) {
  const ip = req.nextUrl.searchParams.get("ip") || "";
  const geo = await FastGeoip.lookup(ip);
  const result = Object.assign({ ip }, geo || {
    country: "unknown",
  });
  return NextResponse.json(result);
}

