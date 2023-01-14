import { gql } from '@apollo/client';
import { CHARACTER_FRAGMENT } from '../fragments/fragments';

export const GET_CHARACTERS = gql`
  ${CHARACTER_FRAGMENT}
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
      }
      results {
        ...characterFragment
      }
    }
  }
`
