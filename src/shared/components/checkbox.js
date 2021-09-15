import { memo } from 'react'
import styled from 'styled-components'
import { color, border, space, layout } from 'styled-system'

import { Label } from './text'
import { Row } from './box'
import Tick from '../svg/tick.svg'
import containerPropsSeparate from '../functions/container-props-separate'

const Checkbox = props => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { value, name, label, onChange, containerStyle, inputRef, ...inputProps } = childProps

  return (
    <Row
      alignItems='flex-start'
      {...containerProps}
      {...containerStyle}
    >
      <CheckboxContainer
        checked={value}
        onClick={onChange}
      >
        <HiddenInput
          ref={inputRef}
          type='checkbox'
          id={name}
          name={name}
          readOnly
          checked={value}
          {...inputProps}
        />
        { !!value && 
          <Checked />
        }
      </CheckboxContainer>
      { !!label &&
        <CheckboxLabel htmlFor={name}>
          { label }
        </CheckboxLabel>
      }
    </Row>
  )
}

const Checked = styled(Tick)({
  height: '18px',
  width: '18px',
  path: {
    fill: 'white'
  }
})

const CheckboxLabel = styled(Label)({
  marginLeft: '10px',
  marginTop: '3px',
  ':hover': {
    cursor: 'pointer'
  }
})

const HiddenInput = styled('input')({
  position: 'absolute',
  opacity: 0,
  height: 0,
  width: 0,
  visibility: 'hidden'
})

const CheckboxContainer = styled('div')(
  ({ theme, checked }) => ({
    minWidth: '26px',
    minHeight: '26px',
    borderWidth: '2px',
    borderRadius: '5px',
    borderStyle: 'solid',
    backgroundColor: checked ? theme.colors.primary : 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: checked ? theme.colors.primary : theme.colors.grey30,
    ':hover': {
      cursor: 'pointer'
    }
  }),
  color,
  border,
  space,
  layout
)

export default memo(Checkbox)