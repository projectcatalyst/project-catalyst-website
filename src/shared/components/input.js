import { memo } from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import { Column, Row } from './box'
import { Label } from './text'
import containerPropsSeparate from '../functions/container-props-separate'

const Input = props => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { Left, Right, id, name, showErrors, inputRef, rules, label, error, containerStyle, control, ...inputProps } = childProps

  return (
    <Column {...containerProps} css={containerStyle}>
      { !!label && 
        <Label mb='6px' textAlign='left' htmlFor={name}>
          { label }
        </Label>
      }
      <Row alignItems='center' width='100%' position='relative'>
        { !!Left && 
          <LeftContainer>
            { Left }
          </LeftContainer>
        }
        <InputBase
          ref={inputRef}
          name={name}
          paddingLeft={Left ? '42px' : '10px'}
          paddingRight={Right ? '40px' : '10px'}      
          { ...inputProps }
        />
        { !!Right && 
          <RightContainer>
            { Right }
          </RightContainer>      
        }
      </Row>
      <Row justifyContent='flex-end'>
        { showErrors && 
          <Row position='absolute' minHeight='15px' justifyContent='flex-end'>
            { !!error && 
              <Label
                htmlFor={name}
                variant='labelSmall'
                color='red50'
                mt='6px'
              >
                { error }
              </Label>
            }
          </Row>      
        }
      </Row>
    </Column>
  )
}

const InputBase = styled('input')(
  ({ theme }) => ({
    flex: 1,
    padding: '0 10px',
    minHeight: '40px',
    width: 'inherit',
    fontSize: '18px',
    lineHeight: '24px',    
    fontWeight: 400,
    borderRadius: '4px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme.input.border,
    backgroundColor: theme.input.background,
    color: theme.input.text,
    textOverflow: 'ellipsis'
  }),
  color,
  layout,
  space
)

const LeftContainer = styled('div')({
  position: 'absolute',
  left: '10px',
  marginTop: '2px'
})

const RightContainer = styled('div')({
  position: 'absolute',
  right: '10px',
  marginTop: '2px'
})

Input.defaultProps = {
  type: 'text',
  showErrors: true
}

export default memo(Input)