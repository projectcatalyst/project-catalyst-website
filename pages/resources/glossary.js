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
    name: 'Glossary'
  }
]

const Glossary = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Glossary | Project Catalyst Community Site'
        description='The Project Catalyst glossary lists all of the terms and definitions you are likely to encounter when getting involved with the Project Catalyst ecosystem.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='50px' px='10px'>
        <Breadcrumb ml='20px' links={breadcrumbLinks} />

        <WarningMessage mx='15px' mt='30px'>
          This glossary is in review where terms may be missing or need updating. The <LinkText href='https://www.notion.so/cardanocommunity/Project-Catalyst-Glossary-82473bed33d142ae89d1578e9e1a223b'>glossary document</LinkText> is being shared with IOG for collaboration to help create a strong base for the terminology and definitions that community projects will use for their projects.
        </WarningMessage>

        <Column width='100%' mt='40px' px='10px'>
          <Row alignItems='center'>
            <Icon icon='spell-check' fontSize='46px' />        
            <Title ml='20px'>
              Glossary
            </Title>
          </Row>

          <Text mt='35px' mb='10px'>
            If you're new to the cryptocurrency market it is worth looking at some general crypto glossaries such as from <LinkText href='https://coinmarketcap.com/alexandria/glossary'>CoinMarketcap</LinkText> or <LinkText href='https://academy.binance.com/en/glossary'>Binance</LinkText>.
          </Text>
          <Text mt='15px' mb='10px'>
            There is also a <LinkText href='https://docs.cardano.org/en/latest/explore-cardano/glossary.html'>Cardano glossary</LinkText> to find out more about terms used in the Cardano ecosystem that is worth checking out!
          </Text>

          <Text mt='35px' variant='titleSmall' bold>
            Project Catalyst Glossary
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Catalyst App
          </Text>
          <Text mt='15px' mb='10px'>
            The Catalyst app is a mobile application that helps Project Catalyst members view and vote on proposals for each funding round. The voting app is available both on <LinkText href='https://apps.apple.com/app/id1517473397'>iOS</LinkText> and <LinkText href='https://play.google.com/store/apps/details?id=io.iohk.vitvoting'>Android</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Challenge
          </Text>
          <Text mt='15px' mb='10px'>
            A challenge is a specific problem or focus area that aims to help improve the Cardano ecosystem. Challenges could range from attracting software developers, creating DApps, improving decision making or making improvement proposals to Cardano itself. Anyone can try to address a challenge in a funding round by submitting a proposal with their idea.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Challenge Phases
          </Text>
          <Text mt='15px' mb='10px'>
            The three main phases in Project Catalyst are innovation, governance and execution. Each challenge will go through these phases with a subset of stages that take a challenge from idea to execution.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Challenge Setting
          </Text>
          <Text mt='15px' mb='10px'>
            Challenge setting is a challenge where the community come up with proposals for what challenges should be set for future funds. Proposals for challenge setting will include the purpose of the suggested challenge and how it would help the ecosystem and the amount of funding that they suggest should be made available to solve the problem set our in their challenge setting proposal.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Challenge Stages
          </Text>
          <Text mt='15px' mb='10px'>
            Challenge stages are a collection of milestones for a challenge where different members of Project Catalyst will perform tasks to move a challenge from idea towards execution. A list of the phases and stages of the funding process is listed <LinkText href='/resources/funding-process'>here</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Community Advisor
          </Text>
          <Text mt='15px' mb='10px'>
            A community advisor is someone who is familiar with the innovation platform, the challenge, and best practices for developing a proposal. They act to assist innovators in ensuring that their ideas are auditable, achievable, and impactful.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            DAO
          </Text>
          <Text mt='15px' mb='10px'>
            DAO means decentralized autonomous organisation. Project Catalyst is looking to become a fully decentralized organisation for the ecosystem improvements and innovation once it can integrate the governance phase of Cardano named Voltaire.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Fund
          </Text>
          <Text mt='15px' mb='10px'>
            A fund consists of a set of challenges that each have available funding to address certain problems and focus areas within the Cardano ecosystem. There are currently new funding rounds roughly every 6-12 weeks for Project Catalyst. 
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Ideascale
          </Text>
          <Text mt='15px' mb='10px'>
            Ideascale is an ideas platform that Project Catalyst members use to submit and manage proposals, view other proposals and assess proposals in the governance phase. Ideascale is an independent company that was selected by IOG to help facilitate the Project Catalyst funding process.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Project Catalyst
          </Text>
          <Text mt='15px' mb='10px'>
            Project Catalyst is a series of experiments which seeks to generate the highest levels of community innovation. Catalyst is bringing on-chain governance to the Cardano blockchain by allowing the community to self-determine priorities for growth. It also lets participants deploy funding to proposals which tackle challenges and capitalize on opportunities that arise in the life cycle of Cardano.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Proposal
          </Text>
          <Text mt='15px' mb='10px'>
            A proposal is an idea submission to Project Catalyst that someone or a group wants to get funded. Proposals are made to address a specific challenge outlined in the funding round.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Proposer
          </Text>
          <Text mt='15px' mb='10px'>
            A proposer is someone who takes their idea and creates a proposal in Project Catalyst with the aim to get funding from the community treasury. Anyone can become a proposer whether that is an individual, a group of people or an organisation. 
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Minimum Voting Threshold
          </Text>
          <Text mt='15px' mb='10px'>
            Each fund has a minimum voting threshold in Ada that they must have to participate in voting.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Veteran Community Advisor
          </Text>
          <Text mt='15px' mb='10px'>
            Veteran community advisors are community advisors that help review the proposal assessments made by community advisors for a given funding round. Veteran community advisors need to have already completed a funding round as a community advisor before they can become a veteran community advisor.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Voter
          </Text>
          <Text mt='15px' mb='10px'>
            Voters are those who vote in the governance phase on the proposals that they want to see get funded. Voters can be anyone who owns Ada and meets the minimum voting threshold.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Registration Snapshot
          </Text>
          <Text mt='15px' mb='10px'>
            To vote in Project Catalyst voters must register their Cardano address that they wish to vote from. The registration snapshot will take all the people who have registered before the deadline of the snapshot and include them in that voting round.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Voting Snapshot
          </Text>
          <Text mt='15px' mb='10px'>
            When the voting deadline is reached a snapshot is taken to capture the votes from every registered voter for that given moment. Voters can replace their existing vote as many times as they like before the voting snapshot deadline. 
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Voting Rewards
          </Text>
          <Text mt='15px' mb='10px'>
            Voters are compensated for voting in a given funding round as a reward mechanism for increasing participation.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Voter Registration
          </Text>
          <Text mt='15px' mb='10px'>
            Voters are required to register to vote in Project Catalyst. To register to vote a person has to download the voting app and register their Cardano address in the allotted time for voter registration for a given fund.
          </Text>
        </Column>

        <Line mt='30px' />

        <Title mt='30px' mb='20px' ml='10px'>
          Related resources
        </Title> 

        <Row flexWrap='wrap'>
          <ResourceItem
            url='https://docs.google.com/document/d/1qYtV15WXeM_AQYvISzr0a0Qj2IzW3hDvhMBvZZ4w2jE/'
            imageSrc='/catalyst-logo.svg'
            title='Project Catalyst FAQ'
            source='official'
          />          
        </Row>
      </Column>

      <PageFooter />
    </Column>
  )
}

export default Glossary