import { Row, Column } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import { Title } from '../../src/shared/components/text'
import Icon from '../../src/shared/components/font-icon'
import WarningMessage from '../../src/shared/components/warning-message'
import ResourceItem, { ResourceSourceExplainer } from '../../src/shared/components/resource-item'

const Resources = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Resources | Project Catalyst Community Site'
        description={`Project Catalyst resources list covers everything that is needed to understand and get involved in Cardano's treasury governance ecosystem.`}
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' alignItems='center' pb='50px' px='10px'>
        
        <Column mt='30px' mb='20px' width='100%'>
          <WarningMessage mx='15px' mb='30px'>
            These resources are in beta. The following resources will look to receive more feedback from IOG and the community to make any corrections and improvements.
          </WarningMessage>

          <ResourceSourceExplainer />
          <Title mx='15px' mt={{ _: '10px', sm: 0 }}> 
            Project Catalyst
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              title='What Is Project Catalyst?'
              url='/resources/what-is-project-catalyst'
              image={<img src='/catalyst-logo.svg' width='50px' height='50px' />}
              source='community'
            />
            <ResourceItem
              title='Funding Process'
              url='/resources/funding-process'
              image={<Icon icon='tasks' fontSize='42px' />}  
              source='community'            
            />
            <ResourceItem
              title='Glossary'
              url='/resources/glossary'
              image={<Icon icon='spell-check' fontSize='46px' />}
              source='community'
            />
          </Row>
        </Column>

        <Column width='100%' my='20px'>
          <Title mx='10px'>
            Roles
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              url='/resources/community-advisor'
              image={<Icon icon='star' fontSize='46px' />}
              title='Community Advisor'
              source='community'
            />
            <ResourceItem
              url='/resources/proposer'
              image={<Icon icon='wrench' fontSize='48px' />}
              title='Proposer'
              source='community'
            />
            <ResourceItem
              url='/resources/voter'
              image={<Icon icon='vote' fontSize='40px' />}
              title='Voter'
              source='community'
            />
          </Row>
        </Column>

        <Column width='100%' my='20px'>
          <Title mx='10px'>
            Communication
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              url='https://t.me/ProjectCatalystChat'
              image={<Icon icon='telegram' fontSize='50px' color='#0088cc' />}
              title='Project Catalyst Chat'
              source='official'
            />
            <ResourceItem
              url='https://t.me/CatalystCommunityAdvisors'
              image={<Icon icon='telegram' fontSize='50px' color='#0088cc' />}
              title='Community Advisors Chat'
              source='official'
            />
            <ResourceItem
              url='https://t.me/catalystproposers'
              image={<Icon icon='telegram' fontSize='50px' color='#0088cc' />}
              title='Proposers Chat'
              source='official'
            />
            <ResourceItem
              url='https://discord.com/invite/uPv97TvGvC'
              image={<Icon icon='discord' fontSize='50px' color='#7289da' />}
              title='Project Catalyst Discord Chat'
              source='community'
            />
          </Row>
        </Column>

        <Column width='100%' my='20px'>
          <Title mx='10px'>
            News
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              url='https://t.me/cardanocatalyst'
              image={<Icon icon='telegram' fontSize='50px' color='#0088cc' />}
              title='Project Catalyst Anouncements'
              source='official'
            />
            <ResourceItem
              url='https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w'
              image={<img src='/youtube.png' width='50px' height='36px' />}
              title='Town Halls And IOHK Content'
              source='official'
            />
            <ResourceItem
              url='https://adapulse.io/'
              image={<img src='/catalyst-logo.svg' width='50px' height='50px' />}
              title='AdaPulse Catalyst News'
              source='community'
            />
          </Row>
        </Column>

        <Column width='100%' my='20px'>
          <Title mx='10px'>
            Ideascale
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              url='https://cardano.ideascale.com/'
              imageSrc='/ideascale.png'
              title='Ideascale'
              source='official'
            />
            <ResourceItem
              imageSrc='/ideascale.png'
              title='Ideascale Submit An Idea Guide'
              url='https://intercom.help/ideascale/en/articles/682959-submit-an-idea'
              source='official'
            />
          </Row>
        </Column>

        <Column width='100%' my='20px'>
          <Title mx='10px'>
            Voting
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              url='https://apps.apple.com/app/id1517473397'
              image={<img src='/catalyst-app.png' width='50px' height='50px' />}
              title='iOS Catalyst Voting App'
              source='official'
            />
            <ResourceItem
              url='https://play.google.com/store/apps/details?id=io.iohk.vitvoting'
              image={<img src='/catalyst-app.png' width='50px' height='50px' />}
              title='Android Catalyst Voting App'
              source='official'
            />
            <ResourceItem
              imageSrc='/catalyst-logo.svg'
              title='All you need to know - Fund 6 Voting'
              url='https://www.reddit.com/r/cardano/comments/p2xpi8/project_catalyst_all_you_need_to_know_fund6_voter/'
              source='official'
            />          
            <ResourceItem
              imageSrc='/catalyst-logo.svg'
              title='Registration & Voting Guide'
              url='https://iohk.zendesk.com/hc/en-us/articles/900005679386'
              source='official'
            />
            <ResourceItem
              url='https://cardano.ideascale.com/a/pages/results'
              imageSrc='/ideascale.png'
              title='Voting Results'
              source='official'
            />
          </Row>
        </Column>

        <Column width='100%' my='20px'>
          <Title mx='10px'>
            Useful Links & Media
          </Title>
          <Row mt='10px' justifyContent='flex-start' flexWrap='wrap'>
            <ResourceItem
              url='https://docs.google.com/document/d/1qYtV15WXeM_AQYvISzr0a0Qj2IzW3hDvhMBvZZ4w2jE/'
              imageSrc='/catalyst-logo.svg'
              title='Project Catalyst FAQ'
              source='official'
            />
            <ResourceItem
              url='https://docs.google.com/spreadsheets/d/15R-Vbajy4t4fGs1TipNMfL1pEO9cwdn6WV13lKviX4Q/'
              image={<img src='/google-sheets.png' width='40px' height='50px' />}
              title='Project Catalyst Dashboard'
              source='official'
            />
            <ResourceItem
              url='https://www.youtube.com/watch?v=WcI-ZvyeRd8'
              image={<img src='/youtube.png' width='50px' height='36px' />}
              title={`Implementing Cardano's Governance Model`}
              source='official'
            />
            <ResourceItem
              url='https://docs.google.com/document/d/1G__eWrmsUxecET2e3zIniPSQJ-FWI1YAGJ-vLwzm8U8'
              image={<img src='/google-docs.png' width='40px' height='50px' />}
              title='Community Moderation'
              source='official'
            />
            <ResourceItem
              url='https://docs.google.com/spreadsheets/d/1xny1W7HhHANLNeQcnbr8El5rakJ80VIM7fgDwJ-uqys'
              image={<img src='/google-sheets.png' width='40px' height='50px' />}
              title='Treasury Data'
              source='official'
            />
            <ResourceItem
              url='https://t.me/catalystdryruns'
              image={<Icon icon='telegram' fontSize='50px' color='#0088cc' />}
              title='Help find bugs and test'
              source='official'
            />
            <ResourceItem 
              url='https://www.notion.so/cardanocommunity/Catalyst-Resources-039cedaeb2814904ac941718d022b629'
              image={<img src='/notion.svg' width='50px' height='50px' />}
              title='Catalyst Resources List'
              source='community'
            />
          </Row>
        </Column>

      </Column>

      <PageFooter />
    </Column>
  )
}

export default Resources