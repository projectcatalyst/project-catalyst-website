import { Row, Column } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import Text, { Title } from '../../src/shared/components/text'
import Breadcrumb from '../../src/shared/components/breadcrumb'
import LinkText from '../../src/shared/components/link-text'
import Icon from '../../src/shared/components/font-icon'
import WarningMessage from '../../src/shared/components/warning-message'
import Line from '../../src/shared/components/line'
import ResourceItem from '../../src/shared/components/resource-item'

const breadcrumbLinks = [
  {
    name: 'Resources',
    url: '/resources'
  },
  {
    name: 'Community Advisor'
  }
]

const CommunityAdvisor = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Community Advisor | Project Catalyst Community Site'
        description='Project Catalyst community advisor resource informing you about the role, reasons why you may want to become a community advisor and how to be an effective community advisor.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='50px' px='10px'>
        <Breadcrumb ml='20px' links={breadcrumbLinks} />

        <WarningMessage mx='15px' mt='30px'>
          This resources is in beta. The resource will look to receive more feedback from IOG and the community to make any corrections and improvements.
        </WarningMessage>

        <Column width='100%' mt='40px' px='10px'>
          <Row alignItems='center'>
            <Icon icon='star' fontSize='46px' />
            <Title ml='20px'>
              Community Advisor
            </Title>
          </Row>

          <Text mt='35px' variant='subHeading' bold>
            What is a community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            Community Advisors (CA) review other peoples proposals that are trying to get funding in Project Catalyst. A CA will review a proposal against a set of objectives for the campaign that the proposal is asking for funding from. The CA will provide a numerical score along with an explanation that covers the rationale behind the score given.
          </Text>
          <Text mt='15px' mb='10px'>
            CAs help voters have more information on whether proposals are impactful, feasible and auditable so that voters can make more informed decisions on which proposals to vote for.
          </Text>
          <Text mt='15px' mb='10px'>
            CAs also help proposers by giving them feedback on how to improve their proposals which helps increase the overall quality of the proposals in each funding round.
          </Text>
          <Text mt='15px' mb='10px'>
            For more information about CAs, take a look at the <LinkText href='https://docs.google.com/document/d/1QkdaFK1tigrSI40iMeV3UP9GyTGsoqVmCUp7OJz0WFs/edit#heading=h.ckr7mej5c3di'>official Community Advisor Guide</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Who can become a community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            Anyone can become a Community Advisor (CA). The role is suitable for people who are open-minded, curious and want to enhance ideas in Project Catalyst. Expertise in a specific field is helpful but not a requirement. If you already have a certain role in project catalyst, there might be a conflict of interest. For more information, take a look at the following <LinkText href='https://docs.google.com/document/d/1m9IBuOgfFI1cIusupGPJn3R3EVkDXWzEUskRceCkLSQ/edit#heading=h.gw50yn1yxjbf'>document</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Why should I become a community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            Community Advisors in the world largest DAO are at the forefront of newest innovation and disruption in the DApp / DeFi space. Being a Community Advisor is perfect for intellectually curious people. You can engage in a variety of topics, learn a lot on the way and earn a side income. 4% of every funding round will be allocated as rewards for assessments to CAs. For more information on the rewards, look at the "Community Advisor Incentive" header in the official <LinkText href='https://docs.google.com/document/d/1Fn1CQHK_TNSaybQtnxvI9DZJ9PAufZelBEfOLWbp-gw'>Community Advisor Guide</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How can I become a community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            Each funding round, you can sign up to become a community advisor. Just go to <LinkText href='https://cardano.ideascale.com/a/index'>Cardano Ideascale</LinkText> to register. Before each round, you will be automatically be asked if you are logged in. You won't miss it.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How can I be an effective community advisor?
          </Text>
          <Text mt='15px'>
            To become a better CA, carefully read official <LinkText href='https://docs.google.com/document/d/1Fn1CQHK_TNSaybQtnxvI9DZJ9PAufZelBEfOLWbp-gw'>CA guide</LinkText> and follow the guiding principles.          
          </Text>
          <Text ml='15px' mt='4px' mb='10px'>
            <pre>
              { `1. Treat proposals and proposers with respect.\n2. Separate the idea from the proposal.\n3. Be mindful of your time and knowledge.\n4. Community Advisors offer advice.` }
            </pre>
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How can I stay up to date with the recent information for CAs?
          </Text>
          <Text mt='15px' mb='10px'>
            For weekly updates, you can watch the weekly townhall update on IOG's <LinkText href='https://www.crowdcast.io/iohk'>Crowdcast</LinkText> or <LinkText href='https://www.youtube.com/c/IohkIo/videos'>Youtube Channel</LinkText> Channel (every Wednesday). The newest funding rounds will be visible on <LinkText href='https://cardano.ideascale.com/'>Cardano Ideascale</LinkText> and important announcements regarding Catalyst will be posted on <LinkText href='https://t.me/cardanocatalyst'>Telegram</LinkText>. To engage in more conversations about the proposals, join the <LinkText href='https://discord.gg/8HeBaUdm'>Cardano Project Catalyst Discord</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How do I connect with other CAs?
          </Text>
          <Text mt='15px' mb='10px'>
            You can join the <LinkText href='https://t.me/CatalystCommunityAdvisors'>CA Telegram</LinkText>channel to get to know other CAs and engage in the most recent discussions. You can also find other active CAs in the community <LinkText href='https://discord.com/invite/8HeBaUdm'>Cardano Project Catalyst Discord</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            What is the timeline for CAs in each funding round?
          </Text>
          <Text mt='15px' mb='10px'>
            Each funding round (every 12 weeks currently) will provide a 7 day window for CA Reviews called the "Assess Proposals" phase. This will be followed by a 5 day “Review of the Reviewers” phase carried out by Veteran Community Advisors (vCA). To see where we are in the process, take a look at the <LinkText href='/calendar'>calendar</LinkText>.
          </Text>

          <Line mt='30px' />

          <Title mt='35px'>
            Veteran Community Advisor
          </Title>

          <Text mt='35px' variant='subHeading' bold>
            What is a veteran community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            Veteran Community Advisors (vCA) ensure that the quality of reviews by CAs are of a high standard and improve over time. vCAs help to filter out poor reviews and malicious actors that try to harm the review process.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Why become a veteran community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            Veteran Community Advisors are able to further shape the proposal assessment stage in Project Catalyst and improve the overall decision making process. The role is perfect for CAs that want to further engage at the forefront of the evolution of the Project Catalyst funding process.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            What does a veteran community advisor do?
          </Text>
          <Text mt='15px' mb='10px'>
            After the CAs submitted their reviews, an anonymized CSV-file containing all assessments will be passed for peer review by veteran CA's who will filter out substandard assessments. Non-constructive Feedback will be flagged according to the following model.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Who can become a veteran community advisor?
          </Text>
          <Text mt='15px' mb='10px'>
            If you have already been a Community Advisor for a round of funding you can apply to be a Veteran Community Advisor.
          </Text>
        </Column>

        <Line mt='30px' />

        <Title mt='30px' mb='20px' ml='10px'>
          Related resources
        </Title> 

        <Row flexWrap='wrap'>
          <ResourceItem
            imageSrc='/ideascale.png'
            title='Ideascale'
            url='http://cardano.ideascale.com/'
            source='official'
          />
          <ResourceItem
            imageSrc='/catalyst-logo.svg'
            title='Community Advisor Onboarding'
            url='https://docs.google.com/document/d/16aq9dNudJ5S3TEVQhBgRznTCoaF8SQezyActtVhec8E'
            source='official'
          />
          <ResourceItem
            imageSrc='/catalyst-logo.svg'
            title='Community Advisor Tutorial'
            url='https://vimeo.com/600295406'
            source='community'
          />
          <ResourceItem
            imageSrc='/catalyst-logo.svg'
            title='Community Advisor Guide'
            url='https://docs.google.com/document/d/1QkdaFK1tigrSI40iMeV3UP9GyTGsoqVmCUp7OJz0WFs'
            source='official'
          />
          <ResourceItem
            imageSrc='/catalyst-logo.svg'
            title='Proposal Assessment Guide'
            url='https://docs.google.com/document/d/1Fn1CQHK_TNSaybQtnxvI9DZJ9PAufZelBEfOLWbp-gw'
            source='official'
          />
          <ResourceItem
            image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
            title='Community Advisor Chat'
            url='https://t.me/CatalystCommunityAdvisors'
            source='official'
          />
          <ResourceItem
            imageSrc='/catalyst-logo.svg'
            title='Community Advisor Tool'
            url='https://cardanocataly.st/ca-tool/#/'
            source='community'
          />
        </Row>
      </Column>

      <PageFooter />
    </Column>
  )
}

export default CommunityAdvisor
