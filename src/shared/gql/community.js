import { gql } from '@apollo/client'

export default gql`
  query Community($filter: CommunityFilter, $cursor: Int, $take: Int) {
    community(filter: $filter, cursor: $cursor, take: $take) {
      id
      username
      name
      thumbnail
      image
      services {
        id
      }
      skills {
        id
      }
      roleStakePoolOperator
      roleCommunityAdvisor
      availableForCollaboration
      accountLinkedIn
      accountGithub
      accountTwitter
      accountDiscord
      accountTelegram      
    }
  }
`