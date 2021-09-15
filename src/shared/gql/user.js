import { gql } from '@apollo/client'

export default gql`
  query User($input: UserInput!) {
    user(input: $input) {
      id
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