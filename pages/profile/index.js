import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { Column, Row } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import Text, { Title } from '../../src/shared/components/text'
import Button from '../../src/shared/components/button'
import Loading from '../../src/shared/components/loading'
import ProfileAccounts from '../../src/shared/components/profile-accounts'
import useUser from '../../src/shared/hooks/use-user'
import ProfileImage from '../../src/shared/components/profile-image'

import ME_QUERY from '../../src/shared/gql/me'

const Profile = () => {
  const router = useRouter()
  const [user, userLoading] = useUser()
  const { data, loading } = useQuery(ME_QUERY)

  const profileLoading = userLoading || loading
  const me = !!data && data.me
  const hasRole = !!me && (me.roleCommunityAdvisor || me?.roleStakePoolOperator)

  const handleUpdateUser = () => router.push('/profile/update')

  const handleLogout = () => signOut({ callbackUrl: '/' })

  return (
    <Column width='100%'>
      <HTMLHead
        title='Profile | Project Catalyst Community Site'
        description='Manage your Project Catalyst community profile so you can share the right information with the rest of the community and find others to collaborate with.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='30px' px='20px'>
        { !me && profileLoading && 
          <Row>
            <Loading mt='30px' />
          </Row>
        }
        { !!me &&
          <ProfileContainer mt={{ _: '20px', lg: '40px' }} px={{ _: '5px', sm: '10px', md: '20px'}} py={{ _:'15px', md:'30px' }}>

            <ProfileImage src={me.image} />
            <Title bold mt='20px'>
              { me.name }
            </Title>
            <Text mt='5px' color='grey70'>
              @{ me.username }
            </Text>

            <ProfileAccounts
              mt='15px'
              linkedin={me.accountLinkedIn}
              github={me.accountGithub}
              twitter={me.accountTwitter}
              discord={me.accountDiscord}
              telegram={me.accountTelegram}
              owner={true}
            />

            <Column width='100%' mt='30px'>
              <Text bold ml='5px'>
                Community roles
              </Text>
              <Row mt='5px' flexWrap='wrap'>
                { me.roleCommunityAdvisor && 
                  <RoleContainer>
                    <RoleLabel>
                      Community advisor
                    </RoleLabel>
                  </RoleContainer>
                }
                { me.roleStakePoolOperator && 
                  <RoleContainer>
                    <RoleLabel>
                      Stake pool operator
                    </RoleLabel>
                  </RoleContainer>
                }
                { !hasRole && 
                  <Text ml='5px' mt='10px'>
                    No roles added
                  </Text>  
                }
              </Row>
            </Column>

            <Column width='100%' mt='30px'>
              <Text bold ml='5px'>
                Community participation
              </Text>
              <Row mt='5px' flexWrap='wrap'>
                { me.availableForCollaboration && 
                  <RoleContainer>
                    <RoleLabel>
                      Available for collaboration
                    </RoleLabel>
                  </RoleContainer>
                }
                { !me.availableForCollaboration && 
                  <Text ml='5px' mt='10px'>
                    No particiaption added
                  </Text>  
                }
              </Row>
            </Column>

            <Column mt='30px' width='100%'>
              <Text bold ml='5px'>
                Services
              </Text>
              <Row mt='5px' flexWrap='wrap'>
                { me.services.map(service => 
                  <ExpertiseContainer key={service.id} p={{ _: '4px 10px 4px 10px', md: '6px 12px 6px 12px' }}>
                    <Text css={{ whiteSpace: 'nowrap' }} variant={{ _:'textSmall', md: 'text' }} color='white'>
                      { service.name }
                    </Text>
                  </ExpertiseContainer>
                ) }
                { !me.services.length &&
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
                { me.skills.map(skill => 
                  <ExpertiseContainer key={skill.id} p={{ _: '4px 10px 4px 10px', md: '6px 12px 6px 12px' }}>
                    <Text css={{ whiteSpace: 'nowrap' }} variant={{ _:'textSmall', md: 'text' }} color='white'>
                      { skill.name }
                    </Text>
                  </ExpertiseContainer>
                ) }
                { !me.skills.length &&
                  <Text ml='5px' mt='10px'>
                    No skills added
                  </Text>  
                }   
              </Row>
            </Column>
          </ProfileContainer>
        }
        { !!me && 
          <Column mt='10px' mb='20px' maxWidth='200px'>
            <Button onClick={handleUpdateUser}>
              Update profile
            </Button>
            <Button mt='20px' onClick={handleLogout} variant='secondary'>
              Logout
            </Button>
          </Column>        
        }
      </Column>

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

export default Profile
