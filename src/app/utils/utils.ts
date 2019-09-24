import { Location } from "../models/location.model";

export const convertLocationName = (location: Location) => {
  const { city, country } = location;
  console.log("country: ", country);

  return country ? `${city}, ${country}` : city;
};
