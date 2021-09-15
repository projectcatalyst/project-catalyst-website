import { memo } from 'react'
import styled from 'styled-components'
import { space, color, typography, position, layout } from 'styled-system'
import {
  faTelegramPlane, faTwitter, faGithub, faLinkedin, faFacebookF,
  faGoogle, faDiscord, faLinkedinIn, faMediumM, faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope, faTimes, faCalendarDay, faTasks, faStar, faSpellCheck,
  faWrench, faClock, faCheck, faExclamationTriangle, faHeart,
  faArrowRight, faVoteYea, faBars, faUsers, faUser, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconOptions = {
  'telegram': faTelegramPlane,
  'twitter': faTwitter,
  'facebook': faFacebookF,
  'youtube': faYoutube,
  'discord': faDiscord,
  'google': faGoogle,
  'linkedin': faLinkedinIn,
  'medium': faMediumM,
  'email': faEnvelope,
  'close': faTimes,
  'check': faCheck,
  'clock': faClock,
  'calendar': faCalendarDay,
  'heart': faHeart,
  'arrow-right': faArrowRight,
  'important': faExclamationTriangle,
  'linkedin': faLinkedin,
  'github': faGithub,
  'wrench': faWrench,
  'spell-check': faSpellCheck,
  'tasks': faTasks,
  'star': faStar,
  'vote': faVoteYea,
  'bars': faBars,
  'users': faUsers,
  'user': faUser,
  'question': faQuestionCircle
}

const IconComponent = ({ icon, iconSize = '30px', color = 'primary', ...props }) =>
  <Icon icon={iconOptions[icon] || icon} color={color} fontSize={iconSize} {...props} />

const Icon = styled(FontAwesomeIcon)(
  space,
  position,
  color,
  typography,
  layout
)

export default memo(IconComponent)
