import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../sanity/env';

export const urlFor = (source) =>
  createImageUrlBuilder({ projectId, dataset }).image(source);
