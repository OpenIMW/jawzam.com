import { SanityDocument } from 'sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IProduct extends SanityDocument {
  image: SanityImageSource;
  name: string;
  price: number;
  description?: string;
  slug: string;
}
