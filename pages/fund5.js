import styled from 'styled-components'
import { layout, space } from 'styled-system'

import { Column, Row } from '../src/shared/components/box'
import HTMLHead from '../src/shared/components/html-head'
import PageHeader from '../src/shared/components/header'
import PageFooter from '../src/shared/components/footer'
import Text from '../src/shared/components/text'
import Line from '../src/shared/components/line'
import Link from '../src/shared/components/link'
import Icon from '../src/shared/components/font-icon'
import LinkText from '../src/shared/components/link-text'
import ResourceItem from '../src/shared/components/resource-item'
import BulletPoint from '../src/shared/components/bullet-point'

const Fund5 = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Fund 5 Progress | Project Catalyst Community Site'
        description='Project Catalyst Fund 5 progress update from the PACE team.'
      />
      <PageHeader hidePromotion={true} />

      <Column minHeight='64vh' width='100%' alignItems='center' alignSelf='center' pb='80px'>

        <Row mt='20px' maxWidth='1200px' px={{ _: '15px', sm: '30px' }} flexWrap='wrap'>

          <Column>
            <Column>
              <img src='/pace-title.svg' width='150px' height='auto' />
              <Text mt='20px' variant='headerSmall'>
                Projects Accelerating the Catalyst Ecosystem
              </Text>

              <Text bold mt='30px'>
                Team
              </Text>
              <Row mt='20px' flexWrap='wrap'>
                <Column mb='30px' alignItems='center'>
                  <ProfileImage src='/george.png'/>
                  <Text variant='text' mt='10px'>
                    George
                  </Text>
                </Column>
                <Column width='30px' />
                <Column mb='30px' alignItems='center'>
                  <ProfileImage src='/jakob.png'/>
                  <Text variant='text' mt='10px'>
                    Jakob
                  </Text>
                </Column>
              </Row>

              <Text bold mt='10px'>
                Problem
              </Text>
              <Text mt='10px'>
                Sustainable growth of Catalyst depends on the efficient onboarding, informing​ and guiding of different stakeholders​ to create meaningful ​collaboration & ​participation.​
              </Text>

              <Text bold mt='30px'>
                Solution
              </Text>
              <Text mt='10px'>
                PACE will help to tackle this ongoing problem by providing tools and resources to try and help increase the quality and quantity of participation and collaboration within Project Catalyst. ​
              </Text>

              <Text bold mt='30px' mb='20px'>
                Townhall presentation
              </Text>
              <YouTubeIframe
                width={{ _: '300px', sm: '426px', md: '853px'}}
                height={{ _: '168px', sm:'240px', md: '480px' }}
                src='https://www.youtube.com/embed/5988qJvf-FQ?start=234'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title="PACE team presentation in Catalyst Townhall"
              />
            </Column>

            <Line mt='50px' />

            <Column mt='30px'>
              <Text mt='20px' variant='headerSmall'>
                Fund 5 Progress
              </Text>

              <Text bold mt='40px' ml='10px'>
                Useful links
              </Text>
              <Row flexWrap='wrap'>
                <ResourceItem
                  imageSrc='/notion.svg'
                  title='Progress updates'
                  text='Weekly progress updates since starting the project'
                  url='https://www.notion.so/cardanocommunity/Project-Updates-7f42f8cc1648444dbfe6e18b74ccc3b7'
                />
                <ResourceItem
                  imageSrc='/catalyst-logo.svg'
                  title='Project Overview'
                  text='Problems, solution ideas, budgeting and initial plans'
                  url='https://www.notion.so/cardanocommunity/Project-Catalyst-Community-Site-2b0616bedeb94c13a135d565eb883412'
                />
              </Row>

              <Row mt='60px' mb='10px' alignItems='center'>
                <Text bold variant='textLarge'>
                  Collaborator list
                </Text>
                <IdeascaleLink url='https://cardano.ideascale.com/a/dtd/Catalyst-Site-Collaborators-list/350653-48088' />
              </Row>
              <BulletPoint>
                Launched the <LinkText href='/community'>collaborator list</LinkText> as a first version that allows members to add services, skills and social accounts
              </BulletPoint>
              <BulletPoint>
                Next steps: Increase adoption, gather feedback and then iterate
              </BulletPoint>
              <BulletPoint>
                Future: Add proposer role by automatically linking users with proposals using their Ideascale account
              </BulletPoint>
              <BulletPoint>
                Future: Improve social account linking by using OAuth
              </BulletPoint>

              <Row mt='60px' mb='10px' alignItems='center'>
                <Text bold variant='textLarge'>
                  Education resources and calendar
                </Text>
                <IdeascaleLink url='https://cardano.ideascale.com/a/dtd/Catalyst-Site-Education-resources/350675-48088' />
              </Row>
              <BulletPoint>
                Created a <LinkText href='/calendar'>calendar</LinkText> which uses data from a community created source that is managed by IOG
              </BulletPoint>
              <BulletPoint>
                Categorised <LinkText href='/resources'>resources</LinkText> and added other useful resources such as a <LinkText href='/resources/glossary'>glossary</LinkText>
              </BulletPoint>
              <BulletPoint>
                Conducted some research on betters ways to <LinkText href='https://www.notion.so/cardanocommunity/1-Catalyst-Resources-Definitions-Guides-Information-17cd3766750f4dd79ff5673dc662d73f'>managing Catalyst resources</LinkText> to take the resources to the next step with open source and more collaborative management
              </BulletPoint>
              <BulletPoint>
                Started work with a new initiative called Catalyst School looking at the <LinkText href='https://www.notion.so/cardanocommunity/Catalyst-School-Resources-Requirements-461674416f604d3cb054713c7d0907dc'>resources requirements</LinkText> that will be open source and maintained by the community for anyone to use
              </BulletPoint>
              <BulletPoint>
                Next steps: Help Catalyst School with creating open source resources that can be then be integrated as the source for resources for the community site
              </BulletPoint>

              <Row mt='60px' mb='10px' alignItems='center'>
                <Text bold variant='textLarge'>
                  Improve proposal data 
                </Text>
                <IdeascaleLink url='https://cardano.ideascale.com/a/dtd/Catalyst-Site-Improve-proposal-data/350686-48088' />
              </Row>
              <BulletPoint>
                Did some standardisation of some <LinkText href='https://github.com/projectcatalyst/ideascale-seed-data'>Ideascale Data</LinkText>
              </BulletPoint>
              <BulletPoint>
                Worked on the data model for the tags for proposals
              </BulletPoint>
              <BulletPoint>
                Created a <LinkText href='https://github.com/projectcatalyst/ideascale-api-wrapper'>Ideascale API Wrapper</LinkText> that would need to be deployed by IOG for access
              </BulletPoint>
              <BulletPoint>
                Next steps: The Ideascale API access has been delayed for the meantime so we will focus on getting the data through IOG using single use scripts and then improving the tags for all proposals
              </BulletPoint>

              <Row mt='60px' mb='10px' alignItems='center'>
                <Text bold variant='textLarge'>
                  Project tracking
                </Text>
                <IdeascaleLink url='https://cardano.ideascale.com/a/dtd/Catalyst-Site-Project-tracking/350699-48088' />
              </Row>
              <BulletPoint>
                Created a <LinkText href='https://github.com/projectcatalyst/ideascale-api-wrapper'>Ideascale API Wrapper</LinkText> that would need to be deployed by IOG for access
              </BulletPoint>
              <BulletPoint>
                Next steps: Once we retreive all the Ideascale data we will combine this with the funding result data which can then be presented and made available to the community
              </BulletPoint>

            </Column>
          </Column>
        </Row>
      </Column>

      <PageFooter />
    </Column>
  )
}

const IdeascaleLink = ({ url }) =>
  <Link ml='20px' target='_blank' href={url}>
    <Row py='6px' px='10px' borderWidth='1px' borderStyle='solid' borderColor='grey30' borderRadius='40px' alignItems='center'>
      <img src='/ideascale.png' width='28px' height='28px' />
      <Text mx='10px' variant='text'>
        View proposal
      </Text>
      <Icon icon='arrow-right' iconSize='20px' color='grey50' mr='2px' />
    </Row>
  </Link>

const YouTubeIframe = styled('iframe')(
  layout,
  space
)

const ProfileImage = styled('img')({
  width: '120px',
  height: '120px',
  borderRadius: '60px'
})

export default Fund5
