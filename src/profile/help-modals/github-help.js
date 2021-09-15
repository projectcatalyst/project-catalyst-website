import styled from 'styled-components'

import { Column } from '../../shared/components/box'
import OrderedList from '../../shared/components/ordered-list'
import HelpModal from '../../shared/components/help-modal'

const GithubHelp = () =>
  <HelpModal title='Github Username' mx='10px'>
    <Column width='100%' px='15px' pb='15px' maxWidth='600px'>
      <OrderedList
        items={[
          'Go to github.com',
          'Go to your profile page',
          'You can find your username below your name on the left or in the address bar'
        ]}
        itemStyle={{ marginTop: '6px', marginBottom: '6px' }}
      />
      <HelpImage src='/github-username.png' />
    </Column>
  </HelpModal>

const HelpImage = styled('img')({
  marginTop: '10px',
  objectFit: 'cover',
  width: '100%',
  maxWidth: '360px',
  height: 'auto',
})

export default GithubHelp