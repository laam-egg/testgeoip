import Image from "next/image";
import styles from "./page.module.css";

import { headers } from "next/headers";
import FastGeoip from "doc999tor-fast-geoip"

import IpAddressLord from "@/components/IpAddressLord"

export default async function Home() {
  const ip = headers().get('x-forwarded-for') || "unknown";
  const country = (ip === "unknown" ? "unknown" : (
    (await FastGeoip.lookup(ip))?.country || "unknown"
  ));
  return (
    <main>
      <div>
        <p>
          IP address: {ip} ; country: {country}
        </p>
        <IpAddressLord />
      </div>
   </main>
  );
}
