import { gql } from '@apollo/client'

export default gql`
  mutation checkUsername($username: String!) {
    checkUsername(username: $username)
  }
`