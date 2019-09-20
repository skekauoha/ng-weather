import { Location } from '../models/location.model';

export const convertLocationName = (location: Location) => {
  const {city, country} = location;

  return country ? `${city}, ${country}` : city;
}
