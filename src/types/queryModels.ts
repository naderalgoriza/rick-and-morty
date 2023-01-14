import { TCharacter } from "./character";
import { TEpisode } from "./episode";
import { TLocation } from "./location";

export type GetCharactersModel = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
    },
    results: TCharacter[]
  }
}

export type GetEpisodesModel = {
  episodes: {
    info: {
      count: number;
      pages: number;
      next: number;
    },
    results: TEpisode[]
  }
}

export type GetLocationsModel = {
  locations: {
    info: {
      count: number;
      pages: number;
      next: number;
    },
    results: TLocation[]
  }
}
