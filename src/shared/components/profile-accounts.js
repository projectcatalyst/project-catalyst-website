import { memo, useState } from 'react'

import { Row, Column } from './box'
import { IconButton } from '../../shared/components/font-icon'
import formatAccountLink from '../functions/format-account-link'
import DiscordModal from './discord-modal'

const ProfileAccounts = ({ owner, linkedin, github, twitter, discord, telegram, ...props }) => {
  const [discordModalVisible, setDiscordModalVisible] = useState(false)

  const handleAccountLink = (type, id) => event => {
    event.stopPropagation()
    if (formatAccountLink(type, id)) window.open(formatAccountLink(type, id))
    if (type === 'discord') setDiscordModalVisible(true)
  }

  return (
    <Column>
      <Row alignItems='center' {...props}>
        { !!linkedin && 
          <IconButton mx='4px' onClick={handleAccountLink('linkedin', linkedin)} icon='linkedin' iconSize='26px' color='primary' />
        }
        { !!github &&
          <IconButton mx='4px' onClick={handleAccountLink('github', github)} icon='github' iconSize='26px' color='primary' />
        }
        { !!twitter && 
          <IconButton mx='4px' onClick={handleAccountLink('twitter', twitter)} icon='twitter' iconSize='26px' color='primary' />
        }
        { !!discord && 
          <IconButton mx='4px' onClick={handleAccountLink('discord', discord)} icon='discord' iconSize='26px' color='primary' />
        }
        { !!telegram && 
          <IconButton mx='4px' onClick={handleAccountLink('telegram', telegram)} icon='telegram' iconSize='26px' color='primary' />
        }
      </Row>
      { discordModalVisible && 
        <DiscordModal
          onClose={() => setDiscordModalVisible(false)}
          username={discord}
          text={owner ? 'Your Discord username' : ''}
        />
      }
    </Column>
  )
}

export default memo(ProfileAccounts)