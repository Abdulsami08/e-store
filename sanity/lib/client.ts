import { createClient } from 'next-sanity'

//import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  token: process.env.SANITY_ACCESS_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v2024-06-13",
  useCdn: true,
  perspective: 'published',
})
