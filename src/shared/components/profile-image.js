import styled from 'styled-components'
import { layout, space, flexbox, border } from 'styled-system'

const ProfileImage = ({ src, onClick, size, ...props }) => {
  const handleOnError = event => {
    event.target.src = '/profile-placeholder.png'
  }

  return (
    <ImageComponent
      src={src}
      onError={handleOnError}
      onClick={onClick}
      {...sizeOptions[size || 'large']}
      {...props}
    />               
  )
}

const sizeOptions = {
  'small': {
    width: '50px',
    height: '50px',
    borderRadius: '25px'
  },
  'medium': {
    width: '70px',
    height: '70px',
    borderRadius: '35px'
  },
  'large': {
    width: '100px',
    height: '100px',
    borderRadius: '50px'
  }
}

const ImageComponent = styled('img')(
  {
    ':hover': {
      cursor: 'pointer'
    }
  },
  layout,
  space,
  flexbox,
  border
)

export default ProfileImage