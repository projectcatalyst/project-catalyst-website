import React, { memo } from 'react'
import styled from 'styled-components'
import { space, color, typography, layout, variant, flexbox } from 'styled-system'

const TextComponent = ({ children, multiLine, textAlign, hoverColor, center, bold, light, italic, ...props }) => {
  const { variant } = props
  const Component = typeOptions[variant] || Text
  return (
    <Component
      textAlign={textAlign || 'left'}
      {...!!center && { textAlign: 'center' }}
      hoverColor={hoverColor}
      {...!!bold && { fontWeight: '600' }}
      {...!!light && { fontWeight: '300' }}
      {...!!italic && { fontStyle: 'italic' }}
      {...!!multiLine && { lineHeight: increasedLineHeightOptions[variant] }}
      {...props}
    >
      { children }
    </Component>
  )
}

const baseStyles = ({ theme, hoverColor, ellipsis }) => ({
  color: theme.colors.text,
  ... !!hoverColor && {
    ':hover': {
      color: theme.colors[hoverColor] || hoverColor
    }
  },
  ... !!ellipsis && {
    'white-space': 'nowrap',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis'
  }
})

const baseHeaderStyles = {
  fontFamily: "'Baloo Tamma 2', 'Montserrat', sans-serif, Helvetica;",
}

const styledSystemOptions = [typography, color, space, layout, flexbox]

const HeaderLarge = styled('h1')(
  baseStyles,
  baseHeaderStyles,
  variant({
    variants: {
      headerLarge: {
        fontSize: ['40px', '44px', '48px'],
        fontWeight: 600,
        lineHeight: ['43px', '47px', '51px']
      }
    }
  }),
  ...styledSystemOptions
)

const Header = styled('h2')(
  baseStyles,
  baseHeaderStyles,
  variant({
    variants: {
      header: {
        fontSize: ['32px', '32px', '38px'],
        fontWeight: 600,
        lineHeight: ['35px', '35px', '41px'],
      }
    }
  }),
  ...styledSystemOptions
)

const HeaderSmall = styled('h3')(
  baseStyles,
  baseHeaderStyles,
  variant({
    variants: {
      headerSmall: {
        fontSize: ['25px', '25px', '30px'],
        fontWeight: 600,
        lineHeight: ['28px', '28px', '33px']
      }
    }
  }),
  ...styledSystemOptions
)

const Title = styled('h4')(
  baseStyles,
  baseHeaderStyles,
  variant({
    variants: {
      title: {
        fontSize: ['23px', '23px','26px'],
        fontWeight: 600,
        lineHeight: ['26px', '26px', '29px']
      },
      titleSmall: {
        fontSize: ['20px', '20px', '24px'],
        fontWeight: 600,
        lineHeight: ['23px', '23px', '27px']
      }
    }
  }),
  ...styledSystemOptions
)

const Text = styled('p')(
  baseStyles,
  variant({
    variants: {
      textLarge: {
        fontSize: ['16px', '16px', '20px'],
        fontWeight: 400,
        lineHeight: ['19px', '19px', '23px']
      },
      text: {
        fontSize: ['14px', '14px', '16px'],
        fontWeight: 400,
        lineHeight: ['17px', '17px', '19px']
      },
      textSmall: {
        fontSize: ['11px', '11px', '14px'],
        fontWeight: 400,
        lineHeight: ['14px', '14px', '17px']
      }
    }
  }),
  ...styledSystemOptions
)

const Label = styled('label')(
  baseStyles,
  variant({
    variants: {
      label: {
        fontSize: ['14px', '14px', '16px'],
        fontWeight: 400,
        lineHeight: ['17px', '17px', '19px']
      },
      labelSmall: {
        fontSize: ['11px', '11px', '14px'],
        fontWeight: 400,
        lineHeight: ['14px', '14px', '17px']
      }
    }
  }),
  ...styledSystemOptions
)

const typeOptions = {
  headerLarge: HeaderLarge,
  header: Header,
  headerSmall: HeaderSmall,
  title: Title,
  titleSmall: Title,
  titleText: Title,
  textLarge: Text,
  text: Text,
  textSmall: Text,
  label: Label,
  labelSmall: Label
}

const increasedLineHeightOptions = {
  headerLarge: { _: '48px', md: '52px', lg: '56px' },
  header: { _: '40px', md: '48px', lg: '48px' },
  headerSmall: { _: '32px', md: '32px', lg: '38px' },
  title: { _: '31px', md: '31px', lg: '36px' },
  titleSmall: { _: '28px', md: '28px', lg: '34px' },
  textLarge: { _: '24px', md: '24px', lg: '32px' },
  text: { _: '20px', md: '20px', lg: '28px' },
  textSmall: { _: '16px', md: '16px', lg: '20px' },
  label: { _: '18px', md: '18px', lg: '22px' },
  labelSmall: { _: '15px', md: '15px', lg: '19px' }
}

TextComponent.defaultProps = {
  variant: 'text',
  multiLine: true
}

export default memo(TextComponent)
