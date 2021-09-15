import { Column } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import WarningMessage from '../../src/shared/components/warning-message'

const Calendar = () =>
  <Column width='100%'>
    <HTMLHead
      title='Calendar | Project Catalyst Community Site'
      description='Find out about Project Catalyst funding rounds including the challenges with each of the funding stages and their start and finish times. Look at current, future and previous Project Catalyst funding rounds.'
    />
    <PageHeader />

    <Column maxWidth='1200px' justifyContent='center' minHeight='64vh' width='100%' alignSelf='center' alignItems='center' pb='100px' pt='40px' px='20px'>

      <WarningMessage mb='50px'>
        This calendar is maintained by a community project meaning there is no guarantee the information is accurate and up to date.
      </WarningMessage>

      <iframe className="airtable-embed" src="https://airtable.com/embed/shrDfTcTedMaHEHMj?backgroundColor=blue&viewControls=on" width='100%' height='800px' frameBorder='0'></iframe>

    </Column>

    <PageFooter />
  </Column>

export default Calendar