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
    name: 'Voter'
  }
]

const Voter = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Voter | Project Catalyst Community Site'
        description='Project Catalyst voter resource that details out what a voter is, how to vote and why to participate in voting for the Project Catalyst ecosystem.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='50px' px='10px'>
        <Breadcrumb ml='20px' links={breadcrumbLinks} />

        <WarningMessage mx='15px' mt='30px'>
          This resources is in beta. The resource will look to receive more feedback from IOG and the community to make any corrections and improvements.
        </WarningMessage>

        <Column width='100%' mt='40px' px='10px'>
          <Row alignItems='center'>
            <Icon icon='vote' fontSize='40px' />
            <Title ml='20px'>
              Voter
            </Title>
          </Row>

          <Text mt='35px' variant='subHeading' bold>
            What is voting in Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            In each Project Catalyst funding round Ada holders are able to vote for which projects they want to be funded by the community. Collectively the total Ada from voters will decide which proposals will get funded. The proposals that get funded will influence how the Cardano ecosystem will evolve over time.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Why should I vote?
          </Text>
          <Text mt='15px' mb='10px'>
            As a voter, you can influence the future development in the Cardano ecosystem. You will be part of the largest DAO and decentralized venture capital fund in the world.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Who should / can vote?
          </Text>
          <Text mt='15px' mb='10px'>
            Every Ada holder that has at least 500 Ada in a wallet can use it to vote. Future funding rounds aim to have the minimum threshold decrease over time.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How can I vote?
          </Text>
          <Text mt='15px' mb='10px'>
            For voting you can use a number of different wallets such as <LinkText href='https://yoroi-wallet.com/#/'>Yoroi</LinkText>, <LinkText href='https://daedaluswallet.io/'>Daedalus</LinkText> or <LinkText href='https://adalite.io/'>Adalite</LinkText> wallets. Within a given wallet you will need to register to vote before voting. You can check the most recent <LinkText href='https://www.reddit.com/r/cardano/comments/ofo1bz/fund_5_register_to_vote_all_you_need_to_know/'>official post</LinkText> on all you need to know about voting.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            What are the important dates & timelines?
          </Text>
          <Text mt='15px' mb='10px'>
            The next voting phase will be announced via Telegram on the <LinkText href='https://t.me/cardanocatalyst'>Project Catalyst Announcements Channel</LinkText>. For current timelines of voting, you can look at this Catalyst <LinkText href='/calendar'>calendar</LinkText> as well.
          </Text>

        </Column>

        <Line mt='30px' />

        <Title mt='30px' mb='20px' ml='10px'>
          Related resources
        </Title> 

        <Row flexWrap='wrap'>
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
            imageSrc='/catalyst-app.png'
            title='iOS Voting App'
            url='https://apps.apple.com/app/id1517473397'
            source='official'
          />
          <ResourceItem
            imageSrc='/catalyst-app.png'
            title='Android Voting App'
            url='https://play.google.com/store/apps/details?id=io.iohk.vitvoting'
            source='official'
          />
          <ResourceItem
            image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
            title='Project Catalyst Chat'
            url='https://t.me/ProjectCatalystChat'
            source='official'
          />
        </Row>
  
      </Column>

      <PageFooter />
    </Column>
  )
}

export default Voter