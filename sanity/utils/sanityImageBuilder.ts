import client from '@/sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityImageBuilder = imageUrlBuilder(client);

export default sanityImageBuilder;
