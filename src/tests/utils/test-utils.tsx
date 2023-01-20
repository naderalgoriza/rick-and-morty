import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";

import type { AppStore } from "../../redux/store";
import type { RootState } from "../../redux/rootReducer";
// As a basic setup, import your same slice reducers
import loaderReducer from "../../redux/slices/loaderSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
export interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  mockedProviderProps?: MockedProviderProps;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      loader: {
        count: 0,
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { loader: loaderReducer },
      preloadedState,
    }),
    mockedProviderProps = {
      addTypename: false,
      mocks: [],
    },
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <MockedProvider {...mockedProviderProps}>
        <Provider store={store}>{children}</Provider>
      </MockedProvider>
    );
  }

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
