import styled from 'styled-components'

import { Column } from '../../shared/components/box'
import OrderedList from '../../shared/components/ordered-list'
import HelpModal from '../../shared/components/help-modal'

const DiscordHelp = () =>
  <HelpModal title='Discord Username' mx='10px'>
    <Column width='100%' px='15px' pb='15px' maxWidth='600px'>
      <OrderedList
        items={[
          'Go to the Discord desktop app',
          'Click on your name on the bottom left to copy your username'
        ]}
        itemStyle={{ marginTop: '6px', marginBottom: '6px' }}
      />
      <HelpImage src='/discord-username.png' />
    </Column>
  </HelpModal>

const HelpImage = styled('img')({
  marginTop: '10px',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
})

export default DiscordHelp