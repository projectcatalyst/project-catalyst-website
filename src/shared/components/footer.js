import { memo } from 'react'
import styled from 'styled-components'

import Icon from './font-icon'
import { Column, Row } from './box'
import Text from './text'
import NavigationLink from './navigation-link'

const PageFooter = () => {
  const handleSocialLink = type => () => {
    const options = {
      'pace': process.env.NEXT_PUBLIC_PACE_DOCS_URL,
      'discord': process.env.NEXT_PUBLIC_DISCORD_URL,
      'twitter': process.env.NEXT_PUBLIC_TWITTER_URL,
      'youtube': process.env.NEXT_PUBLIC_YOUTUBE_URL,
      'github': process.env.NEXT_PUBLIC_GITHUB_URL
    }

    const url = options[type]
    if (url) window.open(url, '_tab')
  }

  return (
    <Container>
      <Content>
        <Row flexDirection={{ _: 'column-reverse', lg: 'row' }} justifyContent='space-between' alignItems='center' minHeight={60}>
          <Row flexWrap='wrap' justifyContent='center' width='100%'>
            <Row flexWrap='wrap' justifyContent='center'>
              <IconLink
                onClick={handleSocialLink('pace')}
                IconImage={<img src='/pace-logo.svg' width='36px' height='40px' />}
                backgroundColor='white'
                text='PACE team and Project Catalyst proposals'
              />
              <IconLink
                onClick={handleSocialLink('discord')}
                IconImage={<Icon icon='discord' color='white' iconSize='26px'/>}
                backgroundColor='#5865F2'
                text="'projectcatalyst-org' chat under 'Ecosystem Tools'"
              />
            </Row>
            <Row>
              <IconLink
                onClick={handleSocialLink('twitter')}
                IconImage={<Icon icon='twitter' color='white' iconSize='26px'/>}
                backgroundColor='#1DA1F2'
              />
              <IconLink
                onClick={handleSocialLink('youtube')}
                IconImage={<Icon icon='youtube' color='#FF0000' iconSize='26px'/>}
                backgroundColor='white'
              />
              <IconLink
                onClick={handleSocialLink('github')}
                IconImage={<Icon icon='github' color='black' iconSize='26px'/>}
                backgroundColor='white'
              />
            </Row>
          </Row>
        </Row>
        <Row widht='100%' mt='35px' justifyContent='center'>
          <NavigationLink href='/'>
            <CatalystLogo src='/pace-title-white.svg' />
          </NavigationLink>
        </Row>

      </Content>
    </Container>
  )
}

const IconLink = ({ text, backgroundColor, onClick, IconImage }) =>
  <LinkContainer borderColor={backgroundColor} onClick={onClick}>
    <IconContainer backgroundColor={backgroundColor}>
      { IconImage }
    </IconContainer>
    { !!text &&
      <IconTextContainer maxWidth={{ _: '200px', md: '250px' }}>
        <Text color='white' ml='8px' variant='textSmall' mx='8px'>          
          { text }
        </Text>
      </IconTextContainer>    
    }
  </LinkContainer>

const LinkContainer = styled(Column)({
  margin: '10px',
  height: '50px',
  display: 'flex',
  borderWidth: '1px',
  borderStyle: 'solid',
  flexDirection: 'row',
  borderRadius: '10px',
  ':hover': {
    cursor: 'pointer'
  }
})

const IconContainer = styled(Row)({
  width: '50px',
  height: '50px',
  justifyContent: 'center',
  borderRadius: '8px',
  alignItems: 'center'
})

const IconTextContainer = styled(Row)({
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
})

const CatalystLogo = styled('img')({
  width: '120px',
  '*': {
    fill: 'red'
  }
})

const Container = styled(Row)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.primary,
  justifyContent: 'center',
  alignItems: 'center'
}))

const Content = styled(Column)({
  width: '100%',
  margin: '50px',
  maxWidth: '1200px',
})

export default memo(PageFooter)