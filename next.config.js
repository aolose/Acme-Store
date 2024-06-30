import UnoCSS from '@unocss/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // To support HMR.
    config.cache = false
    config.plugins.push(
        UnoCSS(),
    )
    return config
  },
  // @see https://react.dev/learn/react-compiler
  experimental: {
    reactCompiler: true,
  },
  images:{
    remotePatterns:[
      {
        hostname :'picsum.photos'
      },
      {
        hostname :'loremflickr.com'
      },
    ]
  }
}

export default nextConfig
