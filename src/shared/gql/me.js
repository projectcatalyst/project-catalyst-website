import { gql } from '@apollo/client'

export default gql`
  query me {
    me {
      username
      name
      thumbnail
      image
      services {
        id
        name
      }
      skills {
        id
        name
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