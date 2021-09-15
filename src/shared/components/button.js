import { memo } from 'react'
import styled from 'styled-components'
import { space, layout, variant } from 'styled-system'

import Loading from './loading'

const Button = ({ children, variant, loading, ...props }) =>
  <ButtonBase
    {...{variant}}
    {...props}
    disabled={loading}
  >
    { !loading && children }
    { loading && 
      <LoadingOuter {...{variant}}>
        <Loading color='white' />
      </LoadingOuter>
    }
  </ButtonBase>

const ButtonBase = styled('button')(
  {
    display: 'block',
    fontWeight: '600',
    overflow: 'hidden',
    letterSpacing: '1px',
    padding: '0 16px',
    borderRadius: '6px',
    borderCollapse: 'collapse',
    borderWidth: 0,
    ':hover': {
      cursor: 'pointer'
    }
  },
  variant({
    prop: 'variant',
    variants: {
      primary: {
        color: 'white',
        backgroundColor: 'primary',
        ':hover': {
          backgroundColor: 'primaryDark'
        }
      },
      secondary: {
        color: 'grey80',
        backgroundColor: 'secondary',
        ':hover': {
          backgroundColor: 'secondaryDark'
        }
      },
      confirming: {
        color: 'white',
        backgroundColor: 'confirming',
        ':hover': {
          backgroundColor: 'confirmingDark'
        }
      },
      destructive: {
        color: 'white',
        backgroundColor: 'destructive',
        ':hover': {
          backgroundColor: 'destructiveDark'
        }        
      },
      outlined: {
        color: 'blueNavy80',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'grey30',
        ':hover': {
          backgroundColor: 'white'
        }   
      }
    }
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        fontSize: '14px',
        minHeight: '32px'
      },
      medium: {
        fontSize: '14px',
        minHeight: '40px'
      },
      large: {
        fontSize: '20px',
        minHeight: '50px'
      }
    }
  }),
  space,
  layout
)

const LoadingOuter = styled('div')(
  variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: 'primary'
      },
      secondary: {
        backgroundColor: 'secondary'
      },
      confirming: {
        backgroundColor: 'confirming'
      },
      destructive: {
        backgroundColor: 'destructive'
      }
    }
  }),
  {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
)

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  loading: false
}

export default memo(Button)