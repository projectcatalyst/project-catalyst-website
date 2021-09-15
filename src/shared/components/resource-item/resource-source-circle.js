import { memo } from 'react'

import Box from '../box'
import Icon from '../font-icon'

const ResourceSourceCircle = ({ source, ...props }) => 
  <Box width='26px' height='26px' {...props}>
    <Box width='100%' height='100%' justifyContent='center' alignItems='center'>
      { source === 'official' && 
        <Icon icon='check' fontSize='18px' color='blueNavy20' />
      }
      { source === 'community' &&
        <Icon icon='user' fontSize='15px' color='blueNavy20' />            
      }
    </Box>
  </Box>

export default memo(ResourceSourceCircle)