import { gql } from '@apollo/client'

export default gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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