import { useState } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

import Box, { Column, Row } from '../shared/components/box'
import Text from '../shared/components/text'

const ResourceItem = dynamic(() => import('../shared/components/resource-item'))
const ResourceSourceExplainer = dynamic(() => import('../shared/components/resource-item').then(mod => mod.ResourceSourceExplainer))
const Icon = dynamic(() => import('../shared/components/font-icon'))
const LinkText = dynamic(() => import('../shared/components/link-text'))

const CatalystEcosystem = () => {
  const [tab, setTab] = useState('community-advisor')

  return (
    <Row mt='120px' mb='100px' maxWidth='1200px' px={{ _: '10px', sm: '30px' }} flexWrap='wrap'>
      <Text variant='headerSmall'>
        Get involved
      </Text>

      <Text mt={{ _: '15px', md: '30px' }}>
        The stages for relevant to each role in Project Catalyst are shown below. For each stage the most relevant services and resources are listed. Check out the <LinkText href='/resources/funding-process'>Funding Process</LinkText> resource to find out more about all of the stages in Project Catalyst.
      </Text>

      <GetInvolvedContainer>
        <Row>
          <GetInvolvedNavItem onClick={() => setTab('community-advisor')} active={tab === 'community-advisor'} px={{ _: '7px', sm: '15px' }} py='8px'>
            <Text variant='text'>
              Community Advisor
            </Text>
          </GetInvolvedNavItem>
          <GetInvolvedNavItem onClick={() => setTab('proposer')} active={tab === 'proposer'} px={{ _: '7px', sm: '15px' }} py='8px'>
            <Text variant='text'>
              Proposer
            </Text>
          </GetInvolvedNavItem>
          <GetInvolvedNavItem onClick={() => setTab('voter')} active={tab === 'voter'} px={{ _: '7px', sm: '15px' }} py='8px'>
            <Text variant='text'>
              Voter
            </Text>
          </GetInvolvedNavItem>
        </Row>
        <GetInvolvedContent p={{ _: '10px', sm: '20px' }} topLeftRadius={tab === 'community-advisor' ? '0px' : '10px'}>
          <ResourceSourceExplainer />
          { tab === 'community-advisor' && 
            <Column>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Learn' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Community Advisor Onboarding'
                  text='Official onboarding guide for community advisors'
                  url='https://docs.google.com/document/d/16aq9dNudJ5S3TEVQhBgRznTCoaF8SQezyActtVhec8E'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Community Advisor Guide'
                  text='Learn about the role of a community advisor'
                  url='/resources/community-advisor'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Funding Process'
                  text='Learn about the funding process for Project Catalyst'
                  url='/resources/funding-process'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Ideation' number='1' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Share insights on Ideascale about the challenges'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-swarm.jpeg'
                  title='Swarm sessions'
                  text='Collaborate on ideas in a swarm session'
                  url='https://www.swarm4catalyst.com/'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Refine proposals' number='2' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Add comments and feedback on Ideascale'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-swarm.jpeg'
                  title='Swarm sessions'
                  text='Offer advice and feedback to proposers in swarm sessions'
                  url='https://www.swarm4catalyst.com/'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Assess proposals' number='3' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Add proposal assessments on Ideascale'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Community Advisor Tutorial'
                  text='Learn how to be a community advisor'
                  url='https://vimeo.com/600295406'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Assessment Guide'
                  text='Learn about proposal assessments from the official assessment resource'
                  url='https://docs.google.com/document/d/1Fn1CQHK_TNSaybQtnxvI9DZJ9PAufZelBEfOLWbp-gw'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Community Advisor Tool'
                  text='Review proposals with help using the community advisor tool'
                  url='https://cardanocataly.st/ca-tool/#/'
                  source='community'
                />
                <ResourceItem
                  image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
                  title='Community Advisor Chat'
                  text='Ask questions and collaborate in the official advisors chat'
                  url='https://t.me/CatalystCommunityAdvisors'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='discord' iconSize='46px' mt='8px' color='#7289da' />}
                  title='Community Chat'
                  text='Meet advisors and support proposals in the community'
                  url='https://discord.com/invite/TTZKB9M'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Review the reviewers' number='4' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Veteran Community Advisor Tool'
                  text='Review advisor reviews with the veteran community advisor tool'
                  url='https://cardanocataly.st/vca-tool/#/'
                  source='community'
                />
              </Row>
            </Column>
          }
          { tab === 'proposer' && 
            <Column>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Learn' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Campaign and Proposal Guide'
                  text='Learn about the role of a proposer'
                  url='/resources/proposer'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Funding Process'
                  text='Learn about the funding process for Project Catalyst'
                  url='/resources/funding-process'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Ideation' number='1' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Share insights on Ideascale about the challenges'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-swarm.jpeg'
                  title='Swarm sessions'
                  text='Collaborate on ideas in a swarm session'
                  url='https://www.swarm4catalyst.com/'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'                    
                  title='Community list'
                  text='Find others to collaborate with on proposals'
                  url='/community'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Submit proposals' number='2' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Submit proposals on Ideascale'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale Help Guide'
                  text='Ideascale usage guide'
                  url='https://intercom.help/ideascale/en/articles/682959-submit-an-idea'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
                  title='Proposers Chat'
                  text='Ask questions or share ideas on the official proposers chat'
                  url='https://t.me/catalystproposers'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='discord' iconSize='46px' mt='8px' color='#7289da' />}
                  title='Community Chat'
                  text='Get a channel made for a proposal on the community chat'
                  url='https://discord.com/invite/TTZKB9M'
                  source='community'
                />
              </Row>

              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Refine proposals' number='3' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Make changes or reply to comments'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-swarm.jpeg'
                  title='Swarm sessions'
                  text='Host a swarm session to get feedback on a proposal'
                  url='https://www.swarm4catalyst.com/'
                  source='community'
                />
              </Row>

              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Finalize proposals' number='4' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Make changes or reply to comments'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
                  title='Project Catalyst Chat'
                  text='Share the finished proposal with the community'
                  url='https://t.me/ProjectCatalystChat'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='discord' iconSize='46px' mt='8px' color='#7289da' />}
                  title='Community Chat'
                  text='Share the finished proposal with the community'
                  url='https://discord.com/invite/TTZKB9M'
                  source='community'
                />
              </Row>

              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Reporting' number='5' />
              </Row>
              <Row my='20px'>
                <Text ml='15px' mt='10px' variant='textSmall' maxWidth='330px'>
                  Funded proposals report every two weeks on the progress of execution of their proposal.
                </Text>
              </Row>
            </Column>
          }
          { tab === 'voter' && 
            <Column>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Learn' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Voter Guide'
                  text='Learn about the role of a voter'
                  url='/resources/voter'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Funding Process'
                  text='Learn about the funding process for Project Catalyst'
                  url='/resources/funding-process'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Ideation' number='1' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Share insights on Ideascale about the challenges'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-swarm.jpeg'
                  title='Swarm sessions'
                  text='Collaborate on ideas in a swarm session'
                  url='https://www.swarm4catalyst.com/'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Refine proposals' number='2' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/ideascale.png'
                  title='Ideascale'
                  text='Add comments and feedback on Ideascale'
                  url='http://cardano.ideascale.com/'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-swarm.jpeg'
                  title='Swarm sessions'
                  text='Offer advice and feedback to proposers in swarm sessions'
                  url='https://www.swarm4catalyst.com/'
                  source='community'
                />
                <ResourceItem
                  image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
                  title='Project Catalyst Chat'
                  text='Ask questions and learn about Project Catalyst in the official chat'
                  url='https://t.me/ProjectCatalystChat'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='discord' iconSize='46px' mt='8px' color='#7289da' />}
                  title='Community Chat'
                  text='Support proposals and meet the community'
                  url='https://discord.com/invite/TTZKB9M'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Registration' number='3' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Registration & Voting Guide'
                  text='Learn about registration with the official resource'
                  url='https://iohk.zendesk.com/hc/en-us/articles/900005679386'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Fund 6 Voting Guide'
                  text='All you need to know - Fund 6 voting'
                  url='https://www.reddit.com/r/cardano/comments/p2xpi8/project_catalyst_all_you_need_to_know_fund6_voter/'
                  source='official'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Voting' number='4' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Registration & Voting Guide'
                  text='Learn how to vote on your favourite proposals using the voting apps'
                  url='https://iohk.zendesk.com/hc/en-us/articles/900005679386'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-app.png'
                  title='iOS Voting App'
                  text='Get the official iOS app for voting within Project Catalyst'
                  url='https://apps.apple.com/app/id1517473397'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-app.png'
                  title='Android Voting App'
                  text='Get the official Android app for voting within Project Catalyst'
                  url='https://play.google.com/store/apps/details?id=io.iohk.vitvoting'
                  source='official'
                />
              </Row>
            </Column>
          }
        </GetInvolvedContent>
      </GetInvolvedContainer>
    </Row>
  )
}

const GetInvolvedItemHeader = ({ number, title }) => 
  <Row mt='20px' alignItems='center' mx='10px'>
    <Box mb='3px' width='36px' height='36px' borderRadius='18px' justifyContent='center' alignItems='center' backgroundColor={number ? 'primary' : 'green'}>
      <Text bold color='white'>
        { number || '' }
      </Text>
    </Box>
    <Text ml='15px' variant='headerSmall'>
      { title }
    </Text>
  </Row>

const GetInvolvedContainer = styled(Column)({
  width: '100%',
  marginTop: '40px',
})

const GetInvolvedNavItem = styled(Column)(
  ({ active, theme }) => ({
    position: 'relative',
    top: '1px',
    borderLeftWidth: '1px',
    borderRightWidth: '1px',
    borderTopWidth: '1px',
    borderBottomWidth: '0px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    borderStyle: 'solid',
    borderColor: active ? theme.colors.grey50 : theme.colors.transparent,
    backgroundColor: active ? 'white' : 'transparent',
    ':hover': {
      cursor: 'pointer'
    }
  })
)

const GetInvolvedContent = styled(Column)(
  ({ theme, topLeftRadius }) => ({
    backgroundColor: theme.colors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.colors.grey50,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: topLeftRadius,
    width: '100%'
  })
)

export default CatalystEcosystem