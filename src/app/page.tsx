import { headers } from "next/headers";
import IpAddressLord from "@/components/IpAddressLord"
import getGeoipInfo from "@/utils/geoip";
import { NextRequest, NextResponse } from "next/server";

export default async function Home() {
  const ip = headers().get('x-forwarded-for') || "unknown";
  const country = (await getGeoipInfo(ip)).country;
  const countryByVercel = headers().get('x-lng') || "unknown to Vercel";

  return (
    <main>
      <div>
        <p>
          IP address: {ip} ; country: {country} ; country detected by Vercel: {countryByVercel}
        </p>
        <IpAddressLord />
      </div>
   </main>
  );
}
