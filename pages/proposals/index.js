import Box, { Row, Column } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import PulsingCircle from '../../src/shared/components/pulsing-circle'
import Text from '../../src/shared/components/text'
import LinkText from '../../src/shared/components/link-text'
import WarningMessage from '../../src/shared/components/warning-message'

const Proposals = () => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Proposals | Project Catalyst Community Site'
        description='Search through Project Catalyst proposals to learn about which proposals, teams and market segments were funded and what ideas are up and coming in the ecosystem.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' alignItems='center' pb='50px' px='20px'>

        <WarningMessage mx='15px' mt='30px'>
          Currently the community do not have easy access to the data needed from Ideascale. We are trying to collaborate with IOG and the community on the terminology, definitions and data access in a <LinkText href='https://www.notion.so/cardanocommunity/Project-Catalyst-data-required-problems-and-IOG-tasks-a5d2199f827e4985bdf7fe8368ecb6fc'>document</LinkText> we've shared.
        </WarningMessage>

        <Box width='120px' mt='70px' height='120px' alignItems='center' justifyContent='center'>
          <PulsingCircle /> 
        </Box>
        <Text bold mt='10px'>
          Soon
        </Text>
       
      </Column>

      <PageFooter />
    </Column>
  )
}

export default Proposals
