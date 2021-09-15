import colors from '../colors'
import general from '../general'

export default {
  ...general,

  colors: {
    background: colors.white,
    navigation: '#fafafa',
    icon: colors.grey30,
    text: colors.charcoal,

    primary: colors.blueNavy90,
    primaryDark: colors.blueNavy100,
    secondary: colors.grey10,
    secondaryDark: colors.grey30,
    confirming: colors.green,
    confirmingDark: colors.greenDark,
    destructive: colors.red50,
    destructiveDark: colors.red80,

    link: colors.purple50,
    border: colors.grey30,
    hover: colors.purple50,

    ...colors
  },

  button: {
    primary: colors.purple50
  },

  input: {
    border: colors.grey30,
    error: colors.red50,
    text: colors.blueNavy    
  }
}
