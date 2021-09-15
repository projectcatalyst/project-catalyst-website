import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { Column, Row } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import Text, { Title } from '../../src/shared/components/text'
import Loading from '../../src/shared/components/loading'
import Breadcrumb from '../../src/shared/components/breadcrumb'
import DiscordModal from '../../src/shared/components/discord-modal'
import ProfileImage from '../../src/shared/components/profile-image'
import USER_QUERY from '../../src/shared/gql/user'
import ProfileAccounts from '../../src/shared/components/profile-accounts'

const CommunityMember = () => {
  const { query } = useRouter()
  const [discordModalVisible, setDiscordModalVisible] = useState(false)
  const { data, networkStatus } = useQuery(USER_QUERY, {
    variables: {
      input: {
        username: query?.username
      }
    }
  })

  const user = !!data && data.user
  const userLoading = networkStatus === 1
  const hasRole = !!user && (user.roleCommunityAdvisor || user.roleStakePoolOperator)

  return (
    <Column width='100%'>
      <HTMLHead title='Community | Project Catalyst Community Site' />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='30px' px='20px'>
        <Breadcrumb
          my='20px'
          links={[
            {
              name: 'Community',
              url: '/community'
            },
            {
              name: user?.username
            }
          ]}
        />
        { userLoading && !user &&
          <Column mt='20px' width='30px' alignSelf='left'>
            <Loading />
          </Column>
        }
        { !userLoading && !user && 
          <Column mt='20px'>
            <Text>
              No user for { query.username }
            </Text>
          </Column>
        }
        { !!user && 
          <ProfileContainer mt={{ _: '20px', lg: '40px' }}>

            <ProfileImage src={user.image} />
            <Title bold mt='20px'>
              { user.name }
            </Title>
            <Text mt='5px' color='grey70'>
              @{ user.username }
            </Text>

            <ProfileAccounts
              mt='15px'
              linkedin={user.accountLinkedIn}
              github={user.accountGithub}
              twitter={user.accountTwitter}
              discord={user.accountDiscord}
              telegram={user.accountTelegram}
            />

            { hasRole && 
              <Column mt='30px' width='100%'>
                <Text bold ml='5px'>
                  Community roles
                </Text>
                <Row mt='5px' flexWrap='wrap'>
                  { user.roleCommunityAdvisor && 
                    <RoleContainer>
                      <RoleLabel>
                        Community advisor
                      </RoleLabel>
                    </RoleContainer>
                  }
                  { user.roleStakePoolOperator && 
                    <RoleContainer>
                      <RoleLabel>
                        Stake pool operator
                      </RoleLabel>
                    </RoleContainer>
                  }
                </Row>
              </Column>
            }

            { user.availableForCollaboration && 
              <Column mt='30px' width='100%'>
                <Text bold ml='5px'>
                  Community participation
                </Text>
                <Row mt='5px' flexWrap='wrap'>
                  { user.availableForCollaboration && 
                    <RoleContainer>
                      <RoleLabel>
                        Available for collaboration
                      </RoleLabel>
                    </RoleContainer>
                  }
                </Row>
              </Column>
            }
            
            <Column mt='30px' width='100%'>
              <Text bold ml='5px'>
                Services
              </Text>
              <Row mt='5px' flexWrap='wrap'>
                { user.services.map(service => 
                  <ExpertiseContainer key={service.id} p={{ _: '4px 10px 4px 10px', md: '6px 12px 6px 12px' }}>
                    <Text color='white'>
                      { service.name }
                    </Text>
                  </ExpertiseContainer>
                ) }
                { !user.services.length &&
                  <Text ml='5px' mt='10px'>
                    No services added
                  </Text>  
                }
              </Row>
            
            </Column>
            <Column mt='30px' width='100%'>
              <Text bold ml='5px'>
                Skills
              </Text>
              <Row mt='5px' flexWrap='wrap'>
                { user.skills.map(skill => 
                  <ExpertiseContainer key={skill.id} p={{ _: '4px 10px 4px 10px', md: '6px 12px 6px 12px' }}>
                    <Text color='white'>
                      { skill.name }
                    </Text>
                  </ExpertiseContainer>
                ) }
                { !user.skills.length &&
                  <Text ml='5px' mt='10px'>
                    No skills added
                  </Text>  
                }   
              </Row>
            </Column>
          </ProfileContainer>             
        }
      </Column>

      { discordModalVisible && 
        <DiscordModal
          onClose={() => setDiscordModalVisible(false)}
          username={user.accountDiscord}
        />
      }

      <PageFooter />
    </Column>
  )
}

const ProfileContainer = styled(Column)(
  ({ theme }) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.colors.grey30,
    borderRadius: '25px',
    maxWidth: '500px',
    margin: '20px 0px 20px 0px',
    padding: '30px 20px 30px 20px',
    width: '100%',
    alignItems: 'center',
  })
)

const RoleContainer = styled(Row)(
  ({ theme }) => ({
    margin: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    alignItems: 'center',
    borderColor: theme.colors.grey30,
    borderRadius: '20px',
    padding: '6px 12px 6px 12px',
  })
)

const RoleLabel = styled(Text)({
  marginRight: '8px',
  whiteSpace: 'nowrap'
})

const ExpertiseContainer = styled(Row)(
  ({ theme }) => ({
    margin: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: '20px'
  })
)

export default CommunityMember