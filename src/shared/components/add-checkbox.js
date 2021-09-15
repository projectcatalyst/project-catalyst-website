import { memo } from 'react'
import styled from 'styled-components'
import { color, border, space, layout } from 'styled-system'

import Text from './text'
import Box from './box'
import Plus from '../svg/plus.svg'
import Cross from '../svg/cross.svg'
import containerPropsSeparate from '../functions/container-props-separate'

const AddCheckbox = props => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { value, name, label, onChange, containerStyle, inputRef, ...inputProps } = childProps

  return (
    <Container
      onClick={onChange}
      checked={value}
      {...containerProps}
      {...containerStyle}
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
      <Label checked={value} variant='textSmall'>
        { label }
      </Label>
      <Box width='16px' height='16px' alignItems='center' justifyContent='center'>
        { !value && <PlusIcon /> }
        { value && <CrossIcon /> }
      </Box>
    </Container>
  )
}

const Container = styled(Box)(
  ({ theme, checked }) => ({
    padding: '8px',
    margin: '5px',
    borderColor: theme.colors.grey30,
    borderWidth: '1px',
    borderStyle: 'solid',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: checked ? theme.colors.primary : 'white',
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

const PlusIcon = styled(Plus)(({ theme }) => ({
  height: '16px',
  width: '16px',
  '*': {
    fill: theme.colors.grey70
  }
}))

const CrossIcon = styled(Cross)(({ theme }) => ({
  height: '12px',
  width: '12px',
  '*': {
    fill: theme.colors.white
  }
}))

const Label = styled(Text)(
  ({ theme, checked }) => ({
    color: checked ? theme.colors.white : theme.colors.text,
    whiteSpace: 'nowrap',
    marginRight: '8px',
    userSelect: 'none'
  })
)

const HiddenInput = styled('input')({
  position: 'absolute',
  opacity: 0,
  height: 0,
  width: 0,
  visibility: 'hidden'
})

export default memo(AddCheckbox)