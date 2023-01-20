import React from "react";
import { screen } from "@testing-library/react";
import {
  ExtendedRenderOptions,
  renderWithProviders,
} from "../utils/test-utils";
import { initialState, RootState } from "../../redux/rootReducer";
import { GET_CHARACTERS } from "../../gql/queries/characters";
import type { GetCharactersModel } from "../../types/queryModels";
import { generateCharacters } from "../generators";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

test("routing", async () => {
  const charactersResponse: GetCharactersModel = {
    characters: {
      info: {
        count: 100,
        next: 2,
        pages: 5,
      },
      results: generateCharacters(20),
    },
  };
  const renderOptions: Partial<ExtendedRenderOptions> = {
    mockedProviderProps: {
      addTypename: false,
      mocks: [
        {
          request: {
            query: GET_CHARACTERS,
            variables: {
              page: 1,
            },
          },
          result: {
            data: charactersResponse,
          },
        },
      ],
    },
    preloadedState: initialState,
  };

  const character = charactersResponse.characters.results[0];

  renderWithProviders(<CharacterCard character={character} />, renderOptions);

  const cardTextRegex = new RegExp(
    `${character.name} | ${character.species}`,
    "i"
  );

  const cardText = screen.getByText(cardTextRegex);
  expect(cardText).toBeInTheDocument();
});
