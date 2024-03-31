/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	experimental: {
		serverActions: {
		  bodySizeLimit: '5mb',
		},
	  },
}

module.exports = nextConfig
