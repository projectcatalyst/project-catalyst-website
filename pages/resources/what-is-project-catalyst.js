import { Row, Column } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import Text, { Title } from '../../src/shared/components/text'
import BreadCrumb from '../../src/shared/components/breadcrumb'
import LinkText from '../../src/shared/components/link-text'
import WarningMessage from '../../src/shared/components/warning-message'
import Line from '../../src/shared/components/line'
import Icon from '../../src/shared/components/font-icon'
import ResourceItem from '../../src/shared/components/resource-item'

const breadcrumbLinks = [
  {
    name: 'Resources',
    url: '/resources'
  },
  {
    name: 'What is Project Catalyst'
  }
]

const ProjectCatalyst = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='What is Project Catalyst? | Project Catalyst Community Site'
        description={`Project Catalyst overview that details out what Project Catalyst is and why you may want to get involved in the governance of Cardano's treasury`}
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='50px' px='10px'>
        <BreadCrumb ml='20px' links={breadcrumbLinks} />

        <WarningMessage mx='15px' mt='30px'>
          This resources is in beta. The resource will look to receive more feedback from IOG and the community to make any corrections and improvements.
        </WarningMessage>

        <Column width='100%' mt='40px' px='10px'>
          <Row alignItems='center'>
            <img src='/catalyst-logo.svg' width='50px' height='50px' />         
            <Title ml='20px'>
              Project Catalyst
            </Title>
          </Row>

          <Text mt='35px' variant='subHeading' bold>
            What is Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            <LinkText href='https://iohk.io/en/blog/posts/2021/02/12/our-million-dollar-baby-project-catalyst/'>Project Catalyst</LinkText> is a series of experiments which seeks to generate the highest levels of community innovation. Catalyst is bringing on-chain governance to the Cardano blockchain by allowing the community to self-determine priorities for growth. It also lets participants deploy funding to proposals which tackle challenges and capitalize on opportunities that arise in the life cycle of Cardano.
          </Text>

          <Text mt='15px' mb='10px'>
            To do this, Project Catalyst is divided into a series of funds which are deployed every six weeks. These funds will illicit ideas in the form of proposals from participants. Each proposal will focus around a challenge issued by the Project Catalyst team or the Project Catalyst community. The proposals will then go through a community refinement process where they are vetted for feasibility, auditability, and impact by a group of incentivized community advisors. Once the proposals have been finalized they will be voted on by the community and funds will be distributed in the form of ada to winning projects. Each stage of this process is described in greater detail throughout this document.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Why should I join Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            Project Catalyst enables funding of projects from all over the world. You will get to know a global community that shares a common vision: to bank the unbanked. You may want to join Project Catalyst because you are:
          </Text>
          <Text>
            <pre>
              { `• Looking to bring new ideas to life and help with the future of decentralized platforms\n• Want to learn about all of the new ideas and projects being funded or about the progress of decentralized governance\n• Interested in helping create one of the largest decentralized governance systems\n• Looking to be rewarded for your participation in growing the Cardano ecosystem through creating proposals, voting or helping as a community advisor\n• Wanting to be part of a disrupting innovation force that is constantly evolving`}
            </pre>
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Who can join Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            People from any background can join in with Project Catalyst. Project Catalyst is open to anyone whether you are an Ada holder or not, a professional looking to contribute or just looking to spectate and learn about what is going on. Just go to <LinkText href='https://cardano.ideascale.com/a/index'>Cardano Ideascale</LinkText> and have a look at recent funding rounds and also check out the phases and stages within Project Catalyst to see what happens in each funding round.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How can I engage and stay informed about Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            You can register on <LinkText href='https://cardano.ideascale.com/a/index'>Cardano Ideascale</LinkText> to see all current proposals from each challenge in each funding round. For weekly updates about Project Catalyst you can watch the townhall on <LinkText href='https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w'>Youtube</LinkText> or <LinkText href='https://www.crowdcast.io/iohk'>Crowdcast</LinkText>. If you want to dig deeper, you can checkout all of the news resources or connect with the Community via <LinkText href='https://discord.com/invite/8HeBaUdm'>Discord</LinkText> or <LinkText href='https://t.me/ProjectCatalystChat'>Telegram</LinkText>.
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
          <ResourceItem
            url='https://iohk.io/en/blog/posts/2020/09/10/project-catalyst-voltaire-bring-power-to-the-people/'
            imageSrc='/catalyst-logo.svg'
            title='Project Catalyst Article'
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

export default ProjectCatalyst