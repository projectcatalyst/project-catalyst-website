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
    name: 'Funding Process'
  }
]

const FundingProcess = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Funding Process | Project Catalyst Community Site'
        description='Project Catalyst funding process resource going through each of the funding stages that are included and what is involved in each of the stages.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='50px' px='10px'>
        <Breadcrumb ml='20px' links={breadcrumbLinks} />
        
        <WarningMessage mx='15px' mt='30px'>
          The funding process suggested below is in review and are being shared with IOG for collaboration. They have a number of potential suggested alterations from the original FAQ document that can be found in this <LinkText href='https://www.notion.so/cardanocommunity/Funding-Process-27e8e686d7c6481e988e91cd765bb06e'>document</LinkText>. 
        </WarningMessage>
        
        <Column width='100%' mt='40px' px='10px'>
          <Row alignItems='center'>
            <Icon icon='tasks' fontSize='46px' />
            <Title ml='20px'>
              Funding Process
            </Title>
          </Row>

          <Text mt='35px' mb='10px'>
            A funding round for Project Catalyst happens around every 12 weeks. In each funding round community members can submit proposals to any of the challenges available. Challenges in a funding round will go through phases and stages which takes ideas through to a governance decision and execution.
          </Text>

          <Text mt='35px' variant='titleSmall' bold>
            Challenges
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            What is a challenge?
          </Text>
          <Text mt='15px' mb='10px'>
            A challenge identifies problems or areas for improvement within the Cardano ecosystem. A challenge is made up of a challenge brief, a problem statement, what success looks like, success metrics, an allocated amount available for funding and then also some guiding questions or potential directions that proposers may look to take when proposing ideas to address that challenge.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            What is the maximum amount of funding someone can receive?
          </Text>
          <Text mt='15px' mb='10px'>
            Anyone can submit any number of proposals to address one or all of the challenges available in each funding round. It is up to the community to decide which proposals get funding during the governance phase of the funding process. 
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            What is challenge setting?
          </Text>
          <Text mt='15px' mb='10px'>
            In each funding round you will often find a challenge called challenge setting. The purpose of challenge setting is to let the community decide what challenges should be made available in future funding rounds. Proposals made for challenge setting should identify what the problem is, the amount of available funding suggested for the challenge and what success may look like if that challenge resulted in impactful proposals being executed. The community decides on which of the suggested challenges are the most important to include in the future funding rounds by voting on challenge setting proposals in the governance phase.
          </Text>

          <Text mt='35px' variant='titleSmall' bold>
            Phases and Stages
          </Text>

          <Text mt='35px' mb='10px'>
            Challenges go through three phases - innovation, governance and execution. Within each phase there are a number of stages for the proposers, community advisors and voters. The stages start from insight sharing about the challenges and finishes with the execution of proposals that got selected in the governance process. Below you'll find each of the stages within the three different phases.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Innovation Phase
          </Text>

          <Column ml='30px'>
            <Text mt='35px' variant='subHeading' bold>
              Ideation
            </Text>
            <Text mt='15px' mb='10px'>
              During ideation community members look to share insights and collaborate before drafting proposals to address the fund challenges. For insight sharing the community may share facts, examples, opinions, wild ideas, how to improve the challenges, personal experiences and research to consider at the beginning of a new funding round. Insight sharing could also include identifying gaps where improvements can be made to the Project Catalyst funding process itself or parts of the ecosystem. More information on <LinkText href='https://docs.google.com/document/d/1bSZaeICuyVnpvbgJDB4elENUF9Pv7MGrPTdmjOMPSEo'>insight sharing</LinkText> in an official resource.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Submit proposals
            </Text>
            <Text mt='15px' mb='10px'>
              Proposers can submit their initial ideas as proposals. Upon submission the community can immediately start to provide feedback and collaborate on the proposals submitted.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Refine proposals
            </Text>
            <Text mt='15px' mb='10px'>
              During the refine proposals stage the community are invited to give feedback to the proposals and for the proposers to consider any collaboration or merging of similar proposals. Refining the proposals should increase the impact, feasibility and auditability of the proposals and help increase their chance of success. 
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Finalize proposals
            </Text>
            <Text mt='15px' mb='10px'>
              Proposals are able to make any final changes and improvements to their proposals to ensure they are addressing the challenge with a feasible, auditable and high impact proposal.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Assess proposals
            </Text>
            <Text mt='15px' mb='10px'>
              Community advisors are given time to review the proposals submitted to the funding round. The community advisors review proposals against the challenge objectives and the impact, feasibility and auditability of the proposal.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Review the reviewers 
            </Text>
            <Text mt='15px' mb='10px'>
              Veteran community advisors review the other community advisors proposal assessments to check that they have followed the rules and guidelines. Reviews that didn't conform to those rules and guidelines will get removed. Community advisors must have at least one funding round worth of experience as a community advisor to perform the role of a veteran community advisor. 
            </Text>
          </Column>

          <Text mt='35px' variant='subHeading' bold>
            Governance phase
          </Text>

          <Column ml='30px'>
            <Text mt='35px' variant='subHeading' bold>
              Registration
            </Text>
            <Text mt='15px' mb='10px'>
              Proposals are added to the voting system so that they will be ready for the voting stage. Voters are also invited to register to become part of the fund voting round. At the end of the registration stage a registration snapshot is taken that records which Cardano address have registered to vote in the current funding round along with the proposals that can be voted on.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Voting
            </Text>
            <Text mt='15px' mb='10px'>
              Voters are given time to cast their votes for the proposals they want to get funding. Voters can both upvote and downvote proposals. It is optional on how many proposals a voter can decide to vote on. Voters can change their vote anytime before the voting snapshot if they change their mind on any voting decision. At the end of the voting time a snapshot is taken that records all the current votes by the registered voting addresses.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Vote tallying
            </Text>
            <Text mt='15px' mb='10px'>
              All the votes for each proposal from the voting snapshot are tallied to produce a voting result for which proposals will and won't be funded.
            </Text>          
          </Column>

          <Text mt='35px' variant='subHeading' bold>
            Execution phase
          </Text>

          <Column ml='30px'>
            <Text mt='35px' variant='subHeading' bold>
              Rewarding
            </Text>
            <Text mt='15px' mb='10px'>
              Voting committee distribute rewards to voters and to the community approved proposals.
            </Text>

            <Text mt='35px' variant='subHeading' bold>
              Reporting
            </Text>
            <Text mt='15px' mb='10px'>
              Proposers are tasked with reporting progress updates every two weeks after receiving funding to provide progress reports on the execution and delivery of their proposal.
            </Text>          
          </Column>

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

export default FundingProcess