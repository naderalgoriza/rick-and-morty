import { TCharacter } from "../../types/character";

export const generateCharacters = (numOfCharacters: number) => {
  const characters = [];
  for (let i = 0; i < numOfCharacters; i++) {
    const character: TCharacter = {
      id: i,
      name: "Rick",
      episode: ["episode"],
      gender: "male",
      image: "image",
      status: "status",
      species: "Human",
      location: {
        id: 100 + i,
        name: "location name",
        dimension: "3d",
        type: "type",
        created: "february",
      },
      origin: {
        id: 300 + i,
        name: "location name",
        dimension: "3d",
        type: "type",
        created: "february",
      },
      type: "type",
      url: "url",
      created: "february",
    };
    characters.push(character);
  }
  return characters;
};
