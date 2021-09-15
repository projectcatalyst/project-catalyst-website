import { memo } from 'react'

import { Row } from '../box'
import ResourceSourceCircle from './resource-source-circle'
import Text from '../text'

const ResourceSourceExplainer = () =>
  <Row width='100%' justifyContent='flex-end'>
    <Row mr={{ _: '10px', md: '20px' }}>
      <ResourceSourceCircle source='official' />
      <Text ml='3px' mt={{ _:'4px' , sm: '0px' }}>Official IOG source</Text>
    </Row>
    <Row mr='5px'>
      <ResourceSourceCircle source='community' />
      <Text ml='3px' mt={{ _:'4px' , sm: '0px' }}>Community created</Text>
    </Row>
  </Row>

export default memo(ResourceSourceExplainer)