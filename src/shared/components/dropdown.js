import { memo, useState, useMemo, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Input from './input'
import { Column } from './box'
import Arrow from '../svg/arrow.svg'
import Cross from '../svg/cross.svg'
import containerPropsSeparate from '../functions/container-props-separate'
import { Label } from './text'

const Dropdown = props => {
  const node = useRef()
  const [open, setOpen] = useState(false)

  const { childProps, containerProps } = containerPropsSeparate(props)
  const { label, name, inputRef, clearable, onChange, value, touched, editable, options, containerStyle, ...inputProps } = childProps

  const handleClickOutside = event => {
    if (!node.current.contains(event.target)) setOpen(false)
  }

  useEffect(() => {
    if (open) document.addEventListener('mousedown', handleClickOutside)
    else document.removeEventListener('mousedown', handleClickOutside)
    return () =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const optionSet = option => () => {
    onChange(option.value)
    setOpen(false)
  }

  const handleDropdownPress = () => {
    if (value && clearable) onChange(null)
    else setOpen(!open)
  }

  const optionsMap = useMemo(() => 
    options.reduce((acc, cur) => ({ ...acc, [cur.value]: cur.label }), {})
  , [options])

  return (
    <Column
      ref={node}
      {...containerProps}
      {...containerStyle}
      position='relative'
    >
      { !!label && 
        <Label htmlFor={name}>
          { label }
        </Label>
      }
      <DropdownContainer
        onClick={handleDropdownPress}
      >
        <DropdownInput
          inputRef={inputRef}
          {...inputProps}
          id={name}          
          name={name}
          onChange={handleDropdownPress}
          value={optionsMap[value] || 'Select...'}
          Right={
            !!value && clearable
              ? <CrossIcon />
              : <DropdownArrowIcon
                className={open ? 'down' : 'left'}      
              />
          }
        />
      </DropdownContainer>
      { open && 
        <List>
          { !!options && options.map(option => 
            <Item
              id={option.value}
              key={option.value}
              onClick={optionSet(option)}
            >
              { option.label }
            </Item>
          ) }
        </List>      
      }
    </Column>
  )
}

const DropdownContainer = styled('div')({
  ':hover': {
    cursor: 'pointer'
  }
})

const DropdownInput = styled(Input)(({ theme }) => ({
  cursor: 'inherit',
  caretColor: 'transparent',
  ':disabled': {
    backgroundColor: theme.colors.white
  }
}))

const DropdownArrowIcon = styled(Arrow)(({ theme, className }) => ({
  height: '18px',
  transform: className === 'down' ? 'rotate(0deg)' : 'rotate(90deg)',
  transition: 'transform 0.2s',
  path: {
    fill: className === 'down' ? theme.colors.primary : theme.colors.grey70,
    transition: 'fill 0.8s'
  }
}))

const CrossIcon = styled(Cross)(({ theme }) => ({
  height: '18px',
  '*': {
    fill: theme.colors.primary
  }
}))

const List = styled('ul')(({ theme }) => ({
  marginTop: '50px',
  borderWidth: '2px',
  backgroundColor: theme.colors.white,
  borderColor: theme.input.border,
  borderStyle: 'solid',
  borderRadius: '4px',
  position: 'absolute',
  width: '100%',
  marginRight: '10px',
  maxHeight: '200px',
  overflowY: 'scroll',
  marginBottom: '20px',
  zIndex: '10'
}))

const Item = styled('li')(({ theme }) => ({
  minHeight: '40px',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 10px',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: theme.colors.grey10
  }  
}))

export default memo(Dropdown)