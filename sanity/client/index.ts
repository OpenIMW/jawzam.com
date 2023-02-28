import { createClient } from '@sanity/client'
import { groq } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-01-12'
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN!

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // set to `true` to fetch from edge cache
});

export const homePageQuery = groq`*[_type == "homePage" && _id == "homePage"]{
  bgImage,
  catchPhrase,
  buttonLabel,
  features[]->{
    icon,
    title,
    description
  },
  products[]->,
  featuredProduct->,
  specialOrderBannerTitle,
  specialOrderBannerSentence,
  newsletterBannerTitle,
  newsletterBannerSentence
}[0]`;

export const fetchHomePage = async () => {
  return await client.fetch(homePageQuery);
}

export default client;
