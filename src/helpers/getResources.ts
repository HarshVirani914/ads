import { videos } from '../constants';
import { servers } from '../constants/servers';
import { getWeightedItems } from './getWeightedItems';

export const getVideos = () => {
  return getWeightedItems(videos, 10);
};

export const getServers = () => {
  return getWeightedItems(servers, 10);
};
