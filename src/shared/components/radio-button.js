import { memo } from 'react'
import styled from 'styled-components'
import { color, border, space } from 'styled-system'

import { Label } from './text'
import { Row } from './box'
import containerPropsSeparate from '../functions/container-props-separate'

const RadioButton = props => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { name, control, value, checked, defaultValue, inputRef, setValue, rules, containerStyle, label, ...inputProps } = childProps

  return (
    <Row
      alignItems='center'
      {...containerProps}
      {...containerStyle}
    >
      <HiddenInput
        name={name}
        ref={inputRef}
        checked={checked}
        value={value}
        {...inputProps}
        type='radio'
      />
      <RadioContainer
        onClick={() => setValue(name, value)}
      >
        { checked && 
          <Circle />
        }
      </RadioContainer>
      { !!label &&
        <RadioLabel
          htmlFor={name}
          onClick={() => setValue(name, value)}
        >
          { label }
        </RadioLabel>
      }
    </Row>
  )
}

const Circle = styled('div')(({ theme }) => ({
  width: '14px',
  height: '14px',
  borderRadius: '14px',
  backgroundColor: theme.colors.primary
}))

const RadioLabel = styled(Label)({
  marginLeft: '8px',
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

const RadioContainer = styled('div')(
  ({ theme }) => ({
    minWidth: '26px',
    minHeight: '26px',
    borderRadius: '26px',
    backgroundColor: 'white',
    borderWidth: '2px',
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.grey30,
    ':hover': {
      cursor: 'pointer'
    } 
  }),
  color,
  border,
  space
)

export default memo(RadioButton)