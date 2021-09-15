import styled from 'styled-components'

import { Column } from '../../shared/components/box'
import OrderedList from '../../shared/components/ordered-list'
import HelpModal from '../../shared/components/help-modal'

const LinkedInHelp = () =>
  <HelpModal title='LinkedIn Username' mx='10px'>
    <Column width='100%' px='15px' pb='15px' maxWidth='600px'>
      <OrderedList
        items={[
          'Go to linkedin.com',
          'Click on the "Me" avatar on the top right and then click "View Profile"',
          'Your username is shown at the top in the address bar after "/in/"'
        ]}
        itemStyle={{ marginTop: '6px', marginBottom: '6px' }}
      />
      <HelpImage src='/linkedin-username.png' />
    </Column>
  </HelpModal>

const HelpImage = styled('img')({
  marginTop: '10px',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
})

export default LinkedInHelp