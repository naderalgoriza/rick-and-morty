import { gql } from '@apollo/client';

export const LOCATION_FRAGMENT = gql`
  fragment locationFragment on Location {
    id
    name
    type
    dimension
    created
  }
`

export const EPISODE_FRAGMENT = gql`
  fragment episodeFragment on Episode {
    id
    name
    air_date
    episode
    created
  }
`

export const CHARACTER_FRAGMENT = gql`
  ${LOCATION_FRAGMENT}
  ${EPISODE_FRAGMENT}
  fragment characterFragment on Character {
    id
    name
    status
    species
    type
    gender
    origin {
      ...locationFragment
    }
    location {
      ...locationFragment
    }
    image
    episode {
      ...episodeFragment
    }
    created
  }
`
