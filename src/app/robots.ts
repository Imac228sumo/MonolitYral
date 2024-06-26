import { MetadataRoute } from 'next'

import { BASE_URL } from '@/config/api.config'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/policy/',
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	}
}
