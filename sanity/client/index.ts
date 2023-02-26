import { createClient } from '@sanity/client'
import { groq } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-01-12'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // set to `true` to fetch from edge cache
});

export const fetchHomePage = async () => {
  const query = groq`*[_type == "homePage" && _id == "homePage"]{
    bgImage,
    catchPhrase,
    features[]->{
      icon,
      title,
      description
    }
  }[0]`;

  return await client.fetch(query);
}

export default client;
