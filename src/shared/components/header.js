import { memo, Fragment, useState } from 'react'
import styled from 'styled-components'
import { RemoveScrollBar } from 'react-remove-scroll-bar'

import CatalystTitle from '../svg/catalyst-title.svg'
import Box, { Column, Row } from './box'
import touchableIcon from '../functions/touchable-icon'
import NavigationLink from './navigation-link'
import Icon from './font-icon'
import FundPromotionHeader from './fund-promotion-header'

const links = [
  { href: 'https://docs.catalystcontributors.org/project-catalyst/', label: 'Documentation', key: 'documentation', target: '_blank' }
]

const CatalystTitleIcon = touchableIcon(CatalystTitle)

const WebsiteLinks = props => 
  <Box alignItems='center' flexWrap='wrap' {...props}>
    { links.map(({ href, label, key, target }) =>
      <NavigationLink
        key={key}
        href={href}
        fontSize={{ _: '16px', sm: '16px', md: '16px', lg: '18px' }}
        { ... !!target && {target}}
        ml={{ _: '0px', sm: '0px', md: '8px', lg: '14px' }}
        mr={{ _: '0px', sm: '0px', md: '8px', lg: '14px' }}
        mt={{ _: '10px', sm: '10px', md: '0px' }}
        mb={{ _: 10, sm: 10, md: 0 }}
      >
        { label }
      </NavigationLink>
    ) }
  </Box>

const PageHeader = ({ hidePromotion }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const handleMenuShow = () => setMenuVisible(true)
  const handleMenuHide = () => setMenuVisible(false)

  return (
    <Fragment>
      { !hidePromotion && <FundPromotionHeader /> }
      <Container px='20px' py={{ _: '20px', sm: '30px' }}>
        <Content>
          <Row width='100%' justifyContent='space-between' alignItems='center'>
            <Box display={{ _: 'none', md: 'block' }} width='150px' alignItems='center'>
              <NavigationLink href='/'>
                <CatalystTitleIcon
                  height='39px'
                  width='142px'
                />
              </NavigationLink>
            </Box>
            <Box display={{ _: 'block', md: 'none' }} width='100px'>
              <NavigationLink href='/'>
                <CatalystLogo src='/catalyst-logo.svg' />
              </NavigationLink>
            </Box>

            <Box display={{ _: 'none', md: 'flex'}} /> 

            <Row display={{ _: 'flex', md: 'none' }} justifyContent='flex-end' width='100px'>
              <Box onClick={handleMenuShow}>
                <Icon icon='bars' iconSize='40px' color='primary' />
              </Box>              
            </Row>

            <Row display={{ _: 'none', md: 'flex' }} width='150px' justifyContent='flex-end'>
              <WebsiteLinks flexDirection='row' />
            </Row>
          </Row>
        </Content>
        { menuVisible && 
          <MenuOuterContainerMobile display={{ _: 'block', md: 'none' }} >
            <Column>
              <Row justifyContent='flex-end' width='100%'>
                <Box m='20px' onClick={handleMenuHide}>
                  <Icon icon='close' iconSize='40px' />
                </Box>
              </Row>
              <Column px='20px' alignItems='center'>
                <WebsiteLinks flexDirection='column' />
              </Column>
            </Column>
            <RemoveScrollBar />
          </MenuOuterContainerMobile>
        }
      </Container>
    </Fragment>
  )
}

const MenuOuterContainerMobile = styled(Box)({
  zIndex: 10,
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  backgroundColor: 'white'
})

const CatalystLogo = styled('img')({
  width: '50px',
  height: '50px'
})

const Container = styled(Row)({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

const Content = styled(Column)({
  width: '100%',
  maxWidth: '1200px',
  minHeight: '60px',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export default memo(PageHeader)
