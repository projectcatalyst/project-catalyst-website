import styled from 'styled-components'
import { layout, space, flexbox, border, position } from 'styled-system'

import containerPropsSeparate from '../functions/container-props-separate'

const OrderedList = (props) => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { items, itemStyle, ...itemProps } = childProps

  return (
    <List {...containerProps}>
      { items.map(item =>
        <ListItem style={itemStyle} mt='20px' {...itemProps}>
          { item }
        </ListItem>
      ) }
    </List>
  )
}

const List = styled('ol')(
  {
    listStyle: 'none',
    counterReset: 'muffins',
    marginTop: '10px'
  },
  layout,
  space,
  flexbox,
  border,
  position,
)

const ListItem = styled('li')(
  {
    textAlign: 'left',
    counterIncrement: 'muffins',
    ':before': {
      paddingRight: '5px',
      content: 'counter(muffins) ". "'
    }
  },
  layout,
  space,
  flexbox
)

export default OrderedList