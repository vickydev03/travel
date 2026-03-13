import { MetadataRoute } from 'next'
import { db } from '../../prisma/seed'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://strangertogether.com';

  let tourRoutes: MetadataRoute.Sitemap = [];
  let tripRoutes: MetadataRoute.Sitemap = [];

  try {
    const tours = await db.tour.findMany({ select: { id: true } });
    const trips = await db.trip.findMany({ select: { id: true } });

    tourRoutes = tours.map((tour: { id: number }) => ({
      url: `${baseUrl}/tour/${tour.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
    
    tripRoutes = trips.map((trip: { id: number }) => ({
      url: `${baseUrl}/trip/${trip.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating dynamic sitemap routes:", error);
  }

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...tourRoutes,
    ...tripRoutes,
  ]
}
