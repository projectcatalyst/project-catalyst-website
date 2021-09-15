import { memo } from 'react'
import styled from 'styled-components'

import Link from '../link'
import Box, { Row, Column } from '../box'
import Text from '../text'
import ResourceSourceCircle from './resource-source-circle'

const ResourceItem = ({ url, imageSrc, source, image, title, text, ...props }) =>
  <Link maxWidth={{ _: '300px', sm: '340px' }} width='100%' my='10px' mx='10px' target='_blank' href={url} {...props}>
    <ResourceContent>
      { !!source && 
        <ResourceSourceCircle source={source} position='absolute' right={0} top={0} />
      }
      <Row height='100%' alignItems='center' justifyContent='center'>
        <Box width='50px' height='50px' justifyContent='center' alignItems='center'>
          { image || <ResourceImage src={imageSrc} /> }
        </Box>
        <Column ml='15px'>
          <Text variant='text' bold pr='20px'>
            { title }
          </Text>
          { !!text && 
            <Text variant='textSmall'>
              { text }
            </Text>
          }
        </Column>
      </Row>
    </ResourceContent>
  </Link>

const ResourceImage = styled('img')({
  marginTop: '8px',
  marginBottom: '8px',
  width: '50px',
  height: 'auto'
})

const ResourceContent = styled(Row)(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '10px 15px 10px 15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderColor: theme.colors.grey30,
    ':hover': {
      cursor: 'pointer'
    }
  })
)

export default memo(ResourceItem)