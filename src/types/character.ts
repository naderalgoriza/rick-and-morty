import { TLocation } from "./location";

export type TCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TLocation;
  location: TLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
