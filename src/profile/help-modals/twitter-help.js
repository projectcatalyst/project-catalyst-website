import styled from 'styled-components'

import { Column } from '../../shared/components/box'
import OrderedList from '../../shared/components/ordered-list'
import HelpModal from '../../shared/components/help-modal'

const TwitterHelp = () =>
  <HelpModal title='Twitter Username' mx='10px'>
    <Column width='100%' px='15px' pb='15px' maxWidth='600px'>
      <OrderedList
        items={[
          'Go to twitter.com',
          'Click on "Profile"',
          'Your username is shown at the top in the address bar'
        ]}
        itemStyle={{ marginTop: '6px', marginBottom: '6px' }}
      />
      <HelpImage src='/twitter-username.png' />
    </Column>
  </HelpModal>

const HelpImage = styled('img')({
  marginTop: '10px',
  objectFit: 'cover',
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
})

export default TwitterHelp