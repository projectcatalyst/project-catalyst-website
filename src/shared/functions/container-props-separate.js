import { omitBy, isUndefined } from 'lodash'

// NOTE Extract the styled-system props that should apply to 
//      the container rather than the child
const containerPropsSeparate = ({
  m, mt, mr, mb, ml, mx, my, // Margin styles
  p, pt, pr, pb, pl, px, py, // Padding styles
  ...props
}) => ({
  containerProps: omitBy({
    m, mt, mr, mb, ml, mx, my,
    p, pt, pr, pb, pl, px, py
  }, isUndefined),
  childProps: props
})

export default containerPropsSeparate