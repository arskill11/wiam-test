import { WORK_PLACES_URL } from './constants';

export const fetchWorkPlaces = async () => {
  return (await fetch(WORK_PLACES_URL)).json();
};
