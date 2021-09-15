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
    name: 'Proposer'
  }
]

const Proposer = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Proposer | Project Catalyst Community Site'
        description='Project Catalyst proposer resource that details out what a proposer is, how to become a proposer and why you may want to make proposals in a funding round for the Project Catalyst ecosystem.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='50px' px='10px'>
        <Breadcrumb ml='20px' links={breadcrumbLinks} />

        <WarningMessage mx='15px' mt='30px'>
          This resources is in beta. The resource will look to receive more feedback from IOG and the community to make any corrections and improvements.
        </WarningMessage>

        <Column width='100%' mt='40px' px='10px'>
          <Row alignItems='center'>
            <Icon icon='wrench' fontSize='48px' />
            <Title ml='20px'>
              Proposer
            </Title>
          </Row>

          <Text mt='35px' variant='subHeading' bold>
            What is the 'proposing process' in Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            The Cardano Community has a treasury that is allocated to Project Catalyst to help fund projects that benefit the ecosystem and overall community of Cardano. Proposers with ideas can put forward proposals on <LinkText href='https://cardano.ideascale.com/'>Cardano Ideascale</LinkText> to get funding for their projects if the community votes for their proposal.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Why should I propose in Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            If you have a great idea that would solve a problem outlined in a funding challenge then you should participate in the worlds largest DAO to get funding for your project. On the way you'll learn a lot about decentralization and the Cardano Community that is looking to support and engage in great projects.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            Who can propose in Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            Anyone can submit a proposal to get funding. The proposing process is open and transparent. Proposals must be targeted to solve the problems outlined by a given funding challenge.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How do I propose in Project Catalyst?
          </Text>
          <Text mt='15px' mb='10px'>
            After registration on <LinkText href='https://cardano.ideascale.com/'>Cardano Ideascale</LinkText>, you can submit proposals when a new funding round is opened which is currently every 12 weeks.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How do I write an effective proposal?
          </Text>
          <Text mt='15px' mb='10px'>
            Effective proposals will need to address a specific challenge given for that funding round. Proposers need to cover a checklist of requirements to have their proposal be accepted for the voting governance process.
          </Text>
          <Text mt='15px' mb='10px'>
            You can use the <LinkText href='https://docs.google.com/document/d/1oE_cnP0gksdAanXV4w5DYaDNp_tbYEvyHhTUG4HYZ3Q'>official proposal guide</LinkText> to learn about how to write an effective proposal. Proposals are reviewed by Community Advisors according to these <LinkText href='https://docs.google.com/document/d/1Fn1CQHK_TNSaybQtnxvI9DZJ9PAufZelBEfOLWbp-gw'>standards</LinkText>.
          </Text>

          <Text mt='35px' variant='subHeading' bold>
            How can I increase my probability to get funded?
          </Text>
          <Text mt='15px' mb='10px'>
            To increase your changes of being successfully funded proposers will want to interact with the community where possible to receive feedback that will help them improve their proposal. You can engage in dialogues about your proposal on the community <LinkText href='https://discord.com/invite/8HeBaUdm'>Cardano Project Catalyst Discord</LinkText> or get involved in community <LinkText href='https://www.swarm4catalyst.com/'>Swarm sessions</LinkText>.
          </Text>

        </Column>

        <Line mt='30px' />

        <Title mt='30px' mb='20px' ml='10px'>
          Related resources
        </Title> 

        <Row flexWrap='wrap'>
          <ResourceItem
            imageSrc='/catalyst-logo.svg'
            title='Campaign and Proposal Guide'
            url='https://docs.google.com/document/d/1oE_cnP0gksdAanXV4w5DYaDNp_tbYEvyHhTUG4HYZ3Q/edit'
            source='official'
          />                    
          <ResourceItem
            imageSrc='/ideascale.png'
            title='Ideascale'
            url='http://cardano.ideascale.com/'
            source='official'
          />
          <ResourceItem
            imageSrc='/ideascale.png'
            title='Ideascale Help Guide'
            url='https://intercom.help/ideascale/en/articles/682959-submit-an-idea'
            source='official'
          />          
          <ResourceItem
            image={<Icon icon='telegram' iconSize='50px' color='#0088cc' />}
            title='Proposers Chat'
            url='https://t.me/catalystproposers'
            source='official'
          />
          <ResourceItem
            imageSrc='/catalyst-logo.svg'                    
            title='Community list'
            url='/community'
            source='community'
          />
        </Row>
  
      </Column>

      <PageFooter />
    </Column>
  )
}

export default Proposer