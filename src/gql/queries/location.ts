import { gql } from '@apollo/client';
import { LOCATION_FRAGMENT } from '../fragments/fragments';

export const GET_LOCATIONS = gql`
  ${LOCATION_FRAGMENT}
  query locations($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
      }
      results {
        ...locationFragment
      }
    }
  }
`
