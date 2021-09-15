import colors from '../colors'
import general from '../general'

export default {
  ...general,

  colors: {
    background: colors.purple90,
    navigation: colors.purple90,
    icon: colors.white,
    text: colors.white,

    primary: colors.purple50,
    primaryDark: colors.purple60,
    secondary: colors.grey10,
    secondaryDark: colors.grey30,
    confirming: colors.green,
    confirmingDark: colors.greenDark,
    destructive: colors.red50,
    destructiveDark: colors.red80,

    link: colors.purple50,
    border: colors.white,
    hover: colors.purple60,

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
