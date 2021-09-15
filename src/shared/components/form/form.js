import styled from 'styled-components'
import { space, layout } from 'styled-system'

export const defaultErrorMessages = {
  'required': 'Required',
  'minLength': 'Too short',
  'maxLength': 'Too long',
  'pattern': 'Pattern does not match',
  'validPhoneNumber': 'Phone number is not valid'
}

const Form = styled('form')(
  {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  space,
  layout
)

export default Form