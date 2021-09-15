import { gql } from '@apollo/client'

export default gql`
  mutation onboardUser($input: OnboardUserInput!) {
    onboardUser(input: $input) {
      name
      username
      image
      thumbnail
      skills {
        id
      }
      services {
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