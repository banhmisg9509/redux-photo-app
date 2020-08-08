import { formatImageData } from 'utils';
import axiosClient from './axiosClient';

async function fetchPhotoList(page, limit = 12) {
  const photos = await axiosClient.get('', { params: { page, limit } });
  return photos.map(formatImageData);
}

export { fetchPhotoList }