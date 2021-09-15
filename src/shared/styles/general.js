const fontSizes = [
  12, 14, 16, 20, 24, 30, 37, 46, 54
]

const breakpoints = [
  '500px', // mobile
  '768px', // tablet
  '1024px', // laptop
]

// NOTE: Alias for breakpoints
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

export default {
  fontSizes,
  breakpoints
}