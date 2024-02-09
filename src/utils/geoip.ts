import FastGeoip from "doc999tor-fast-geoip";

export default async function getGeoipInfo(ip: string) {
    if (!ip || ip === "unknown") {
        return {
            country: "unknown (due to unknown IP)",
        };
    }
    const geo = await FastGeoip.lookup(ip);
    if (!geo) {
        return {
            country: "unknown (due to FastGeoip error)",
        };
    }

    return geo;
}
