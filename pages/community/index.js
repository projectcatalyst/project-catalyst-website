import { useMemo, useEffect, useRef, useCallback, useState } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Column, Row } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import Text from '../../src/shared/components/text'
import LinkText from '../../src/shared/components/link-text'
import Dropdown from '../../src/shared/components/dropdown'
import Loading from '../../src/shared/components/loading'
import Checkbox from '../../src/shared/components/checkbox'
import ProfileImage from '../../src/shared/components/profile-image'
import { initializeApollo, addApolloState } from '../../src/graphql/apollo-client'
import Line from '../../src/shared/components/line'
import ProfileAccounts from '../../src/shared/components/profile-accounts'

import COMMUNITY_QUERY from '../../src/shared/gql/community'
import PROFESSIONAL_DATA_QUERY from '../../src/shared/gql/professional-data'

const filterProfessionalData = (services, skills, filterService, filterSkill) => {
  const memberServices = filterService ? services.filter(s => s === filterService) : services
  const memberSkills = filterSkill ? skills.filter(s => s === filterSkill) : skills

  if ((memberServices.length + memberSkills.length) <= 6)
    return { memberServices, memberSkills, showMore: false }

  if (memberServices.length < 3)
    return { memberServices, memberSkills: memberSkills.slice(0, 6 - memberServices.length), showMore: true }

  if (memberSkills.length < 3)
    return { memberSkills, memberServices: memberServices.slice(0, 6 - memberSkills.length), showMore: true }

  return { memberSkills: memberSkills.slice(0, 3), memberServices: memberServices.slice(0, 3), showMore: true }
}

const Community = ({ services, skills }) => {
  const router = useRouter()
  const observer = useRef()
  const [hasMore, setHasMore] = useState(true)
  const [filter, setFilter] = useState({})

  const { data, fetchMore, loading, networkStatus, refetch } = useQuery(COMMUNITY_QUERY, {
    variables: {
      cursor: 0,
      filter
    },
    notifyOnNetworkStatusChange: true
  })

  const initialLoading = useMemo(() => networkStatus === 1, [networkStatus])
  const fetchMoreLoading = useMemo(() => networkStatus === 3, [networkStatus])
  const hasFilters = useMemo(() =>
    filter.availableForCollaboration ||
    filter.roleCommunityAdvisor ||
    filter.roleStakePoolOperator ||
    filter.skill ||
    filter.service
  , [filter])
  const hasCommunityMembers = useMemo(() =>
    !!data && !!data.community && data.community.length > 0
  , [data])

  const skillsMap = useMemo(() => skills
    ? skills.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {}) : null
  )
  const servicesMap = useMemo(() => services
    ? services.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {}) : null
  )

  const servicesOptions = useMemo(() =>
    services.map(({ id, name }) => ({ label: name, value: id }))
  )
  const skillsOptions = useMemo(() =>
    skills.map(({ id, name }) => ({ label: name, value: id }))
  )

  const communityFetchMore = useCallback(() => {
    if (loading || !fetchMore || !hasMore) return
    if (!data || !data.community.length) return
    try {
      fetchMore({
        variables: {
          cursor: data.community[data.community.length - 1].id || 0,
          filter
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          return Object.assign({}, prev, {
            community: [...prev.community, ...fetchMoreResult.community]
          })
        }
      })
        .then(response => {
          if (!response.data.community.length) setHasMore(false)
        })
    } catch (error) {}

  }, [loading, fetchMore, hasMore, data])

  const handleMemberNavigate = username => () =>
    router.push(`/community/${username}`)

  const handleRoleCommunityAdvisorUpdate = () => setFilter({ ...filter, roleCommunityAdvisor: !filter.roleCommunityAdvisor })
  const handleRoleStakePoolOperatorUpdate = () => setFilter({ ...filter, roleStakePoolOperator: !filter.roleStakePoolOperator })
  const handleAvailableForCollaborationUpdate = () => setFilter({ ...filter, availableForCollaboration: !filter.availableForCollaboration })
  const handleServiceUpdate = service => setFilter({ ...filter, service })
  const handleSkillUpdate = skill => setFilter({ ...filter, skill })

  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        communityFetchMore()
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore, communityFetchMore])

  useEffect(() => {
    if (loading) return
    setHasMore(true)
    refetch({
      variables: {
        cursor: 0,
        filter
      }
    })
  }, [filter])

  return (
    <Column width='100%'>
      <HTMLHead
        title='Community | Project Catalyst Community Site'
        description='The Project Catalyst community list will help you find other community members to collaborate with or get advice from within the Project Catalyst funding process. If your a proposer the community list is a great place to try and find others to work.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='30px' px='20px'>
        <Row mt='10px' flexWrap='wrap'>
          <Row flexWrap='wrap'>
            <Column mt={{ _: '5px', md: '10px' }} mr={{ _: '10px', sm: '40px' }}>
              <Text bold mb={{ _: '6px', lg: '12px'}}>
                Services
              </Text>
              <Dropdown
                width={{ _: '100%', sm: '210px', md: '100%' }}
                options={servicesOptions}
                clearable={true}
                value={filter?.service || null}
                onChange={handleServiceUpdate}
              />
            </Column>
            <Column mt={{ _: '5px', md: '10px' }} mr={{ _: '10px', sm: '40px' }}>
              <Text bold mb={{ _: '6px', lg: '12px'}}>
                Skills
              </Text>
              <Dropdown
                width={{ _: '100%', sm: '210px', md: '100%' }}
                options={skillsOptions}
                clearable={true}
                value={filter?.skill || null}
                onChange={handleSkillUpdate}
              />
            </Column>
          </Row>
          <Row flexWrap='wrap'>
            <Column mt='10px' mr={{ _: '10px', sm: '40px' }}>
              <Text bold mb={{ _: '6px', lg: '12px'}}>
                Community roles
              </Text>
              <Checkbox label='Stake pool operator' value={filter?.roleStakePoolOperator || false} onChange={handleRoleStakePoolOperatorUpdate} />
              <Checkbox mt='8px' mb='10px' label='Community advisor' value={filter?.roleCommunityAdvisor || false} onChange={handleRoleCommunityAdvisorUpdate} />
            </Column>
            <Column mt='10px' mr={{ _: '10px', sm: '40px' }}>
              <Text bold mb={{ _: '6px', lg: '12px'}}>
                Community participation
              </Text>
              <Checkbox mb='10px' label='Available for collaboration' value={filter?.availableForCollaboration || false} onChange={handleAvailableForCollaborationUpdate} />
            </Column>
          </Row>
        </Row>

        <Line mt='5px' width='auto' color='grey30' />

        { initialLoading &&
          <Loading width='50px' height='50px' mt='50px' />
        }

        { !hasCommunityMembers && !loading &&
          <Row mt='80px' justifyContent='center' width='100%'>
            <Text>
              {`No results!${hasFilters ? ' Try removing a filter.' : ''}`}
            </Text>
          </Row>
        }

        <Row mt='60px' flexWrap='wrap' justifyContent='space-around'>
          { !!data && data?.community.map((user, index) => {
            const { memberServices = [], memberSkills = [], showMore } = filterProfessionalData(user.services, user.skills, filter?.service, filter?.skill)
            const memberRef = index + 1 === data.community.length ? lastElementRef : null
            return (
              <MemberConainer
                key={user.id}
                
                ref={memberRef}
              >
                <Column
                  css={{ position: 'relative', top: '-30px', alignItems:'center' }}
                >

                  <ProfileImage src={user.image} onClick={handleMemberNavigate(user.username)} />
                  <LinkText mt='5px' underline={false} variant='textLarge' bold onClick={handleMemberNavigate(user.username)}>
                    { user.name}
                  </LinkText>
                  <LinkText mt='5px' underline={false} color='grey70' onClick={handleMemberNavigate(user.username)}>
                    @{ user.username }
                  </LinkText>

                  <ProfileAccounts
                    mt='15px'
                    linkedin={user.accountLinkedIn}
                    github={user.accountGithub}
                    twitter={user.accountTwitter}
                    discord={user.accountDiscord}
                    telegram={user.accountTelegram}
                  />

                  <Column mt='10px' minHeight='70px'>
                    <Row width='100%' flexWrap='wrap' justifyContent='center'>
                      { user.roleCommunityAdvisor && 
                        <RoleContainer>
                          <RoleText variant='textSmall'>
                            Community advisor
                          </RoleText>
                        </RoleContainer>                  
                      }
                      { user.roleStakePoolOperator && 
                        <RoleContainer>
                          <RoleText variant='textSmall'>
                            Stake pool operator
                          </RoleText>
                        </RoleContainer>                    
                      }
                      { user.availableForCollaboration && 
                        <RoleContainer>
                          <RoleText variant='textSmall'>
                            Available for collaboration
                          </RoleText>
                        </RoleContainer>                  
                      }
                    </Row>
                  </Column>

                  <Column mt='10px'>
                    <Row flexWrap='wrap' justifyContent='center' maxHeight={{ _: '130px', md: '130px' }} overflow='hidden'>
                      { !!filter && filter.service &&
                        <ProfessionalContainer key='service-filter'>
                          <ProfessionalText variant='textSmall'>
                            { servicesMap[filter.service].name }
                          </ProfessionalText>
                        </ProfessionalContainer>
                      }
                      { !!filter && filter.skill &&
                        <ProfessionalContainer key='skill-filter'>
                          <ProfessionalText variant='textSmall'>
                            { skillsMap[filter.skill].name }
                          </ProfessionalText>
                        </ProfessionalContainer>
                      }
                      { !!servicesMap && memberServices.map(service => 
                        <ProfessionalContainer key={service.id}>
                          <ProfessionalText variant='textSmall'>
                            { servicesMap[service.id].name }
                          </ProfessionalText>
                        </ProfessionalContainer>
                      ) }
                      { !!skillsMap && memberSkills.map(skill => 
                        <ProfessionalContainer key={skill.id}>
                          <ProfessionalText variant='textSmall'>
                            { skillsMap[skill.id].name }
                          </ProfessionalText>
                        </ProfessionalContainer>
                      ) }
                      { showMore && 
                        <ProfessionalContainer key='showMore'>
                          <ProfessionalText variant='textSmall'>
                            { '. . . more' }
                          </ProfessionalText>
                        </ProfessionalContainer>
                      }
                    </Row>
                  </Column>
                </Column>
              </MemberConainer>
            )
          }) }   
        </Row>

        <Row width='50px' height='50px' alignSelf='center'>
          { fetchMoreLoading &&
            <Loading width='50px' height='50px' />
          }
        </Row>
      </Column>

      <PageFooter />
    </Column>
  )
}

const MemberConainer = styled(Column)(
  ({ theme }) => ({
    alignItems: 'center',
    width: '100%',
    maxWidth: '360px',
    height: '425px',
    borderColor: theme.colors.grey30,
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    marginBottom: '40px',
    padding: '10px'
  })
)

const RoleContainer = styled(Row)(
  ({ theme }) => ({
    margin: '5px 4px 5px 4px',
    padding: '2px 10px 2px 10px',
    borderColor: theme.colors.grey30,
    borderRadius: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
  })
)

const RoleText = styled(Text)({
  whiteSpace: 'nowrap'
})

const ProfessionalContainer = styled(Row)(
  ({ theme }) => ({
    margin: '4px 3px 4px 3px',
    padding: '2px 12px 2px 12px',
    backgroundColor: theme.colors.primary,
    borderRadius: '20px'
  })
)

const ProfessionalText = styled(Text)(
  ({ theme }) => ({
    color: theme.colors.white,
    whiteSpace: 'nowrap'
  })
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const professionalDataQuery = await apolloClient.query({
    query: PROFESSIONAL_DATA_QUERY
  })

  return addApolloState(apolloClient, { props: {
    services: professionalDataQuery?.data?.services || null,
    skills: professionalDataQuery?.data?.skills || null
  } })
}

export default Community