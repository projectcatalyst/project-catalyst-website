import styled from 'styled-components'
import { space, layout } from 'styled-system'

const styleIcon = Icon => styled(Icon)(
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
    }
  }),
  space,
  layout
)

export default styleIcon