/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
    images: {
    unoptimized: true, // <-- tilføj denne linje
  }, // <-- her fortæller vi Next.js at det skal lave statisk export
}

export default nextConfig;
