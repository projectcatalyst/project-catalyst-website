import styled from 'styled-components'

import Box, { Row, Column } from '../../shared/components/box'
import OrderedList from '../../shared/components/ordered-list'
import HelpModal from '../../shared/components/help-modal'

const TelegramHelp = () =>
  <HelpModal title='Telegram Username' mx='10px'>
    <Column width='100%' px='15px' pb='15px' maxWidth='600px'>
      <OrderedList
        items={[
          'Go to the Telegram mobile app',
          'Go to the menu and then tap on settings',
          'Your username is shown after the "@" (You also may need to create a username!)'
        ]}
        itemStyle={{ marginTop: '6px', marginBottom: '6px' }}
      />
      <Row justifyContent='flex-start' width='100%'>
        <HelpImage src='/telegram-username1.png' />
        <Box width='15px' />
        <HelpImage src='/telegram-username2.png' />
      </Row>

    </Column>
  </HelpModal>

const HelpImage = styled('img')({
  marginTop: '10px',
  objectFit: 'cover',
  width: '48%',
  maxWidth: '240px',
  height: 'auto',
})

export default TelegramHelp