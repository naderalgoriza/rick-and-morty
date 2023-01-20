import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import loaderReducer, { loaderActions } from "../redux/slices/loaderSlice";
import { initialState } from "../redux/rootReducer";

test("routing", async () => {
  renderWithProviders(<RouterProvider router={router} />);

  const RickMatches = screen.getAllByText(/Rick/i);
  expect(RickMatches[0]).toBeInTheDocument();

  const charactersLink = screen.getByText((content, element) => {
    return element?.tagName.toLowerCase() === "a" && content === "Characters";
  });

  expect(charactersLink).toBeInTheDocument();

  fireEvent.click(charactersLink);

  expect(screen.getByText(/All Characters/i)).toBeInTheDocument();

  expect(screen.queryByText(/All Episodes/i)).not.toBeInTheDocument();
});

test("loader actions", () => {
  let newState = loaderReducer(
    initialState.loader,
    loaderActions.incrementLoader()
  );
  expect(newState.count).toEqual(1);

  newState = loaderReducer(newState, loaderActions.incrementLoader());
  expect(newState.count).toEqual(2);

  newState = loaderReducer(newState, loaderActions.decrementLoader());

  expect(newState.count).toEqual(1);
});
