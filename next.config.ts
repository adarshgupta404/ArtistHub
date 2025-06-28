import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shutterstock.com",  
      },{
        protocol: "https",
        hostname: "vocalist.org.uk",  
      },{
        protocol: "https",
        hostname: "media.istockphoto.com",  
      },{
        protocol: "https",
        hostname: "images.unsplash.com",  
      },{
        protocol: "https",
        hostname: "cdn.pixabay.com",  
      },{
        protocol: "https",
        hostname: "www.freepik.com",  
      },{
        protocol: "https",
        hostname: "www.istockphoto.com",  
      },{
        protocol: "https",
        hostname: "www.gettyimages.com",  
      },{
        protocol: "https",
        hostname: "www.pexels.com",
      }
    ]
  }
};

export default nextConfig;
