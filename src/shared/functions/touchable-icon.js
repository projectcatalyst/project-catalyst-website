import styled from 'styled-components'
import { space } from 'styled-system'

const touchableIcon = Icon => styled(Icon)(
  ({ theme, width = '30px', height = '30px', color }) => ({
    width,
    height,
    'image': {
      width,
      height
    },
    ... !!color && {
      '*': {
        fill: `${theme.colors[color]} !important`
      }
    },
    ':hover': {
      cursor: 'pointer'
    }
  }),
  space
)

export default touchableIcon