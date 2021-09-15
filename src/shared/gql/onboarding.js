import { gql } from '@apollo/client'

export default gql`
  query onboardingData {
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
    services {
      id
      name
    }
    skills {
      id
      name
    }
  }
`