import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images : {
     remotePatterns : [
       {
         protocol : "https",
         hostname : "clinquant-faloodeh-70c1be.netlify.app"
       }
     ]
   }
};

export default nextConfig;
