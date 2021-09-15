import { memo } from 'react'
import styled from 'styled-components'

import { Row } from './box'
import { Label } from './text'
import containerPropsSeparate from '../functions/container-props-separate'

// NOTE: Improvement can be made by making it draggable
const Switch = props => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { containerStyle, inputRef, onChange, name, label, value, ...inputProps } = childProps

  return (
    <Row
      alignItems='center'
      {...containerProps}
      {...containerStyle}
    >
      <SwitchButton
        {...{value}}
        onClick={() => onChange(!value)}  
      >
        <SwitchCircle {...{value}} />
        <HiddenInput
          ref={inputRef}
          type='checkbox'
          id={name}
          name={name}
          readOnly
          {...inputProps}
        />
      </SwitchButton>
      { !!label && 
        <SwitchLabel
          htmlFor={name}
        >
          { label }
        </SwitchLabel>
      }
    </Row>
  )
}

const SwitchButton = styled('div')(({ theme, value }) => ({
  height: '32px',
  minWidth: '60px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px',
  borderRadius: '20px',
  backgroundColor: value ? theme.colors.primary : theme.colors.grey30,
  transition: 'background-color 0.2s',
  ':hover': {
    cursor: 'pointer'
  }
}))

const SwitchLabel = styled(Label)({
  marginLeft: '10px',
  ':hover': {
    cursor: 'pointer'
  }
})

const SwitchCircle = styled('div')(({ theme, value }) => ({
  height: '24px',
  width: '24px',
  borderRadius: '24px',
  position: 'relative',
  left: value ? '28px' : '0px',
  transition: 'left 0.2s',
  backgroundColor: theme.colors.white
}))

const HiddenInput = styled('input')({
  position: 'absolute',
  opacity: 0,
  height: 0,
  width: 0,
  visibility: 'hidden'
})

export default memo(Switch)