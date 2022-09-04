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
  const [tab, setTab] = useState('proposal-assessor')

  return (
    <Row mt='120px' mb='100px' maxWidth='1200px' px={{ _: '10px', sm: '30px' }} flexWrap='wrap'>
      <Text variant='headerSmall'>
        Get involved
      </Text>

      <Text mt={{ _: '15px', md: '30px' }}>
        The stages for relevant to each role in Project Catalyst are shown below. For each stage the most relevant services and resources are listed. Check out the <LinkText href='https://docs.catalystcontributors.org/project-catalyst/funding-process/funding-process' target='_blank'>Funding Process</LinkText> resource to find out more about all of the stages in Project Catalyst.
      </Text>

      <GetInvolvedContainer>
        <Row>
          <GetInvolvedNavItem onClick={() => setTab('proposal-assessor')} active={tab === 'proposal-assessor'} px={{ _: '7px', sm: '15px' }} py='8px'>
            <Text variant='text'>
              Proposal Assessor
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
        <GetInvolvedContent p={{ _: '10px', sm: '20px' }} topLeftRadius={tab === 'proposal-assessor' ? '0px' : '10px'}>
          <ResourceSourceExplainer />
          { tab === 'proposal-assessor' && 
            <Column>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Learn' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Proposal Assessor Guide'
                  text='Learn about the role of a proposal assessor'
                  url='https://docs.google.com/document/d/1g-iZhDlKhUBZkui1uv8NVNfJC4oVD3JtR-P6Fue7XPU/edit'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Funding Process'
                  text='Learn about the funding process for Project Catalyst'
                  url='https://docs.catalystcontributors.org/project-catalyst/funding-process/funding-process'
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
                  imageSrc='/catalyst-swarm.png'
                  title='Swarm sessions'
                  text='Collaborate on ideas in a swarm session'
                  url='https://www.catalystswarm.com/'
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
                  imageSrc='/catalyst-swarm.png'
                  title='Swarm sessions'
                  text='Offer advice and feedback to proposers in swarm sessions'
                  url='https://www.catalystswarm.com/'
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
                  title='Proposal Assessor Tutorial'
                  text='Learn how to be a proposal assessor'
                  url='https://vimeo.com/600295406'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Assessment Guide'
                  text='Learn about proposal assessments from the official assessment resource'
                  url='https://docs.google.com/document/d/1g-iZhDlKhUBZkui1uv8NVNfJC4oVD3JtR-P6Fue7XPU/edit'
                  source='official'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Proposal Assessor Tool'
                  text='Review proposals with help using the proposal assessor tool'
                  url='https://cardanocataly.st/pa-tool/#/'
                  source='community'
                />
                <ResourceItem
                  image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
                  title='Proposal Assessor Chat'
                  text='Ask questions and collaborate in the official assessors chat'
                  url='https://t.me/CatalystCommunityAdvisors'
                  source='official'
                />
                <ResourceItem
                  image={<Icon icon='discord' iconSize='46px' mt='8px' color='#7289da' />}
                  title='Community Chat'
                  text='Meet assessors and support proposals in the community'
                  url='https://discord.gg/yfyfsvdrbj'
                  source='community'
                />
              </Row>
              <Row mt='10px' alignItems='center'>
                <GetInvolvedItemHeader title='Review the reviewers' number='4' />
              </Row>
              <Row my='20px' flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Veteran Proposal Assessor Tool'
                  text='Review assessor reviews with the veteran proposal assessor tool'
                  url='https://cardanocataly.st/vpa-tool/#/'
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
                  url='https://docs.catalystcontributors.org/project-catalyst/proposer/proposer-overview'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Funding Process'
                  text='Learn about the funding process for Project Catalyst'
                  url='https://docs.catalystcontributors.org/project-catalyst/funding-process/funding-process'
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
                  imageSrc='/catalyst-swarm.png'
                  title='Swarm sessions'
                  text='Collaborate on ideas in a swarm session'
                  url='https://www.catalystswarm.com/'
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
                  url='https://discord.gg/yfyfsvdrbj'
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
                  imageSrc='/catalyst-swarm.png'
                  title='Swarm sessions'
                  text='Host a swarm session to get feedback on a proposal'
                  url='https://www.catalystswarm.com/'
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
                  url='https://discord.gg/yfyfsvdrbj'
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
                  url='https://docs.catalystcontributors.org/project-catalyst/voter'
                  source='community'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Funding Process'
                  text='Learn about the funding process for Project Catalyst'
                  url='https://docs.catalystcontributors.org/project-catalyst/funding-process/funding-process'
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
                  imageSrc='/catalyst-swarm.png'
                  title='Swarm sessions'
                  text='Collaborate on ideas in a swarm session'
                  url='https://www.catalystswarm.com/'
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
                  imageSrc='/catalyst-swarm.png'
                  title='Swarm sessions'
                  text='Offer advice and feedback to proposers in swarm sessions'
                  url='https://www.catalystswarm.com/'
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
                  url='https://discord.gg/yfyfsvdrbj'
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