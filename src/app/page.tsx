import { headers } from "next/headers";
import IpAddressLord from "@/components/IpAddressLord"
import getGeoipInfo from "@/utils/geoip";
import { NextRequest, NextResponse } from "next/server";

export default async function Home() {
  const ip = headers().get('x-forwarded-for') || "unknown";
  const country = (await getGeoipInfo(ip)).country;
  const countryByVercel = headers().get('x-lng') || "unknown to Vercel";

  // https://vercel.com/docs/edge-network/headers#x-vercel-ip-country
  const countryInXVercelIpCountry = headers().get('x-vercel-ip-country');

  return (
    <main>
      <div>
        <p>
          IP address: {ip} ; country: {country} ; country detected by Vercel: {countryByVercel}
        </p>
        <p>
          Country detected in <code>X-Vercel-IP-Country</code> header: {headers().get('x-vercel-ip-country')}
        </p>
        <p>
          Detected Continent: {headers().get('x-vercel-ip-country-region')}
        </p>
        <p>
          Detected City: {headers().get('x-vercel-ip-city')}
        </p>
        <p>
          Detected Timezone: {headers().get('x-vercel-ip-timezone')}
        </p>
        <IpAddressLord />
      </div>
   </main>
  );
}
