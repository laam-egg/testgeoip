import { NextRequest, NextResponse } from "next/server";
import getGeoipInfo from "@/utils/geoip";

export async function GET(req: NextRequest) {
  const ip = req.nextUrl.searchParams.get("ip") || "";
  return NextResponse.json(await getGeoipInfo(ip));
}
