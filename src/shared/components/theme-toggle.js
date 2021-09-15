import styled from 'styled-components'

import { withTheme } from '../styles/themes'
import Text from './text'
import Button from './button'

const ThemeToggle = ({ theme: { themeId, themeSet, themeOptions } }) =>
  <Container>
    <Text>
      Current theme: { themeId }
    </Text>
    <ButtonContainer>
      { themeOptions.map(option => 
        <Button
          key={`id-${option}`}
          onClick={() => themeSet(option)}
          m={'5px'}
        >
          { option }
        </Button>
      ) }
    </ButtonContainer>
  </Container>

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
  textAlign: 'center',
  borderRadius: '5px',
  border: `2px solid ${theme.colors.border}`,
  padding: '20px'
}))

const ButtonContainer = styled.div`
  margin-top: 10px;
`

export default withTheme(ThemeToggle)