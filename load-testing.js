import http from 'k6/http'
import { check, sleep } from 'k6'
import { Trend } from 'k6/metrics'

let CommunityTrend = new Trend('Get community', true)

const SLEEP_DURATION = 1

let skillsQuery = `
  query skills {
    skills {
      id
      name
    }
  }
`

let categoriesQuery = `
  query categories {
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

let communityQuery = `
  query community {
    community {
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

let headers = {
  'Content-Type': 'application/json'
}

export let options = {
  stages: [
    { duration: '1s', target: 300 },
    { duration: '9s', target: 300 }
  ]
}

export default function () {
  // http.post('https://dev.projectcatalyst.org/api/graphql', JSON.stringify({ query: skillsQuery }), { headers: headers })

  // sleep(SLEEP_DURATION)

  // http.post('https://dev.projectcatalyst.org/api/graphql', JSON.stringify({ query: categoriesQuery }), { headers: headers })

  // sleep(SLEEP_DURATION)

  const commRes = http.post('https://dev.projectcatalyst.org/api/graphql', JSON.stringify({ query: communityQuery }), { headers: headers })
  check(commRes, { 'status was 200 (get community)': (r) => r.status == 200 })
  CommunityTrend.add(commRes.timings.duration)
}