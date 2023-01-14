import { gql } from '@apollo/client';
import { EPISODE_FRAGMENT } from '../fragments/fragments';

export const GET_EPISODES = gql`
  ${EPISODE_FRAGMENT}
  query episodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
      }
      results {
        ...episodeFragment
      }
    }
  }
`
