const formatImageUrl = image => {
  const response = {
    image: null,
    thumbnail: null
  }

  if (!image) return response

  // Note - https://developers.google.com/people/image-sizing
  if (image?.includes('googleusercontent.com')) {
    response.image = image.split('=')[0] += '=s160-c'
    response.thumbnail = image.split('=')[0] += '=s80-c'
  }

  // Note - https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
  if (image?.includes('twimg.com')) {
    response.image = image.replace('_normal', '')
    response.thumbnail = image.replace('normal', 'bigger')
  }

  // Note - https://discord.com/developers/docs/reference#image-formatting
  if (image?.includes('discordapp.com')) {
    response.image = `${image}?size=160`
    response.thumbnail = `${image}?size=80`
  }

  return response
}

export default formatImageUrl