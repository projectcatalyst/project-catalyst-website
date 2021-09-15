import { useMemo, memo } from 'react'
import styled from 'styled-components'

import { Row } from './box'
import Text from './text'
import LinkText from './link-text'
import Arrow from '../svg/arrow.svg'

const BreadCrumb = ({ links, ...props }) => {
  const renderList = useMemo(() => {
    const tempList = []

    links.forEach((link, index) => {
      if (link.url) tempList.push(<LinkText target='_self' color='grey90' bold underline href={link.url}>{ link.name }</LinkText>)
      else tempList.push(<Text>{ link.name }</Text>)
      if (index + 1 < links.length) tempList.push(<ArrowIcon />)
    })

    return tempList
  }, [links])

  return (
    <Row {...props}>
      { renderList.map(item => item) }
    </Row>
  )
}

const ArrowIcon = styled(Arrow)(
  ({ theme }) => ({
    transform: 'rotate(270deg)',
    width: '16px',
    margin: '4px 10px 0px 10px',
    height: '16px',
    '*': {
      fill: theme.colors.grey30
    }
  })
)

export default memo(BreadCrumb)