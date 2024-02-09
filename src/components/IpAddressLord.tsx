'use client';

import { useState } from "react";

export default function IpAddressLord() {
  const [ipAddress, setIpAddress] = useState("");
  const [message, setMessage] = useState("");

  const inspectIpAddress = async () => {
    try {
      const geo = await fetch(`/api/geoip?ip=${encodeURIComponent(ipAddress)}`).then(res => res.json())
      setMessage(`Country: ${geo.country}`);
    } catch (e) {
      setMessage(`Error: ${e}`);
    }
  };

  return (
  <div>
    <input type="text" placeholder="Enter an IPv4/IPv6 address..." value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
    <button onClick={inspectIpAddress}>{"Inspect this IP address !"}</button>
    <div>{message}</div>
  </div>
  );
}

