import { gql } from '@apollo/client'

export default gql`
  query professionalData {
    skills {
      id
      name
    }
    services {
      id
      name
    }
    categories {
      id
      name
      skills {
        id
      }
      services {
        id
      }
    }
  }
`